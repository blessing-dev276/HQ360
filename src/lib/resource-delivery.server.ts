// Sends the requested guide to the reader's inbox.
// Delivery is wired up once the sending domain is configured; until then the
// request is recorded and the reader still gets the guide from the site.
export async function deliverResourceEmail(input: {
  requestId: string;
  email: string;
  slug: string;
  title: string;
  origin: string;
}): Promise<boolean> {
  console.log(
    `[resource-request] ${input.title} requested by ${input.email} (${input.requestId}) from ${input.origin}`,
  );
  return false;
}
