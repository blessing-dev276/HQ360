CREATE TABLE public.resource_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  resource_slug TEXT NOT NULL,
  resource_title TEXT NOT NULL,
  emailed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.resource_requests TO service_role;

ALTER TABLE public.resource_requests ENABLE ROW LEVEL SECURITY;
