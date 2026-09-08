-- Service portfolio managed from /admin.
-- Each item belongs to a service category (capability_slug) and optionally an
-- industry (industry_slug), and carries an ordered position (sort_order).

CREATE TABLE public.portfolio_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  title TEXT NOT NULL,
  description TEXT,
  -- 'image' | 'video'
  media_type TEXT NOT NULL DEFAULT 'image',
  -- Supabase Storage public URL or an external URL.
  media_url TEXT NOT NULL,
  -- Optional poster image for videos.
  thumbnail_url TEXT,
  -- Which service category it belongs to (see src/data/capabilities.ts slugs).
  capability_slug TEXT NOT NULL,
  -- Which industry it shows under (see src/data/industries.ts slugs). NULL = unassigned.
  industry_slug TEXT,
  -- Optional outbound link (live project, retailer page, case study).
  external_link TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE INDEX portfolio_items_capability_idx ON public.portfolio_items (capability_slug);
CREATE INDEX portfolio_items_industry_idx ON public.portfolio_items (industry_slug);
CREATE INDEX portfolio_items_order_idx ON public.portfolio_items (sort_order, created_at);

GRANT ALL ON public.portfolio_items TO service_role;
ALTER TABLE public.portfolio_items ENABLE ROW LEVEL SECURITY;
-- No policies: all reads and writes go through server routes using the service role.

CREATE OR REPLACE FUNCTION public.portfolio_items_touch_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER portfolio_items_updated_at
  BEFORE UPDATE ON public.portfolio_items
  FOR EACH ROW EXECUTE FUNCTION public.portfolio_items_touch_updated_at();

-- Storage bucket for uploaded images / videos (public read).
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio', 'portfolio', TRUE)
ON CONFLICT (id) DO NOTHING;

-- Public can read objects in the portfolio bucket; writes happen via service role.
DROP POLICY IF EXISTS "portfolio public read" ON storage.objects;
CREATE POLICY "portfolio public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio');
