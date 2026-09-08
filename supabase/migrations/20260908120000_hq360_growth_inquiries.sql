-- HQ360 rebrand: lead capture for the prospecting site.
-- All tables are service-role only; writes go through server routes.

-- Project / growth inquiries submitted from the contact page and industry pages.
CREATE TABLE public.project_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  website TEXT,
  -- Industry the lead came from (preselected on industry pages).
  industry TEXT,
  -- What they need help with (capability areas / free text).
  help_with TEXT[] NOT NULL DEFAULT '{}',
  primary_goal TEXT,
  budget_range TEXT,
  timeline TEXT,
  message TEXT,
  -- Prospecting context.
  source_path TEXT,
  source_industry TEXT,
  -- Lifecycle.
  status TEXT NOT NULL DEFAULT 'new',
  forwarded_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX project_inquiries_created_at_idx ON public.project_inquiries (created_at DESC);
CREATE INDEX project_inquiries_industry_idx ON public.project_inquiries (industry);

GRANT ALL ON public.project_inquiries TO service_role;
ALTER TABLE public.project_inquiries ENABLE ROW LEVEL SECURITY;

-- Newsletter subscribers (footer + insights).
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  email TEXT NOT NULL UNIQUE,
  source_path TEXT,
  status TEXT NOT NULL DEFAULT 'subscribed',
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Free growth-audit requests. The audit topic adapts by industry / source page.
CREATE TABLE public.growth_audit_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT,
  email TEXT NOT NULL,
  website TEXT,
  industry TEXT,
  audit_focus TEXT,
  source_path TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  emailed_at TIMESTAMP WITH TIME ZONE,
  forwarded_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX growth_audit_requests_created_at_idx ON public.growth_audit_requests (created_at DESC);

GRANT ALL ON public.growth_audit_requests TO service_role;
ALTER TABLE public.growth_audit_requests ENABLE ROW LEVEL SECURITY;
