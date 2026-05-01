-- Migration: Add Dealer Website Builder support to dealerships table
ALTER TABLE dealerships ADD COLUMN IF NOT EXISTS website_status text DEFAULT 'not_started';
ALTER TABLE dealerships ADD COLUMN IF NOT EXISTS website_url text;
ALTER TABLE dealerships ADD COLUMN IF NOT EXISTS vercel_project_id text;
ALTER TABLE dealerships ADD COLUMN IF NOT EXISTS website_settings jsonb DEFAULT '{
  "appearance": {
    "primary_color": "#00D4AA",
    "secondary_color": "#0F1729",
    "logo_url": null,
    "hero_image": null,
    "favicon_url": null
  },
  "content": {
    "hero_headline": "Premium Used Cars",
    "hero_subheading": "Quality vehicles and exceptional service you can trust.",
    "usps": [
      {"icon": "Check", "title": "HPI Clear", "desc": "All vehicles are fully HPI checked."},
      {"icon": "Calendar", "title": "Warranty Included", "desc": "3-month warranty as standard."},
      {"icon": "CreditCard", "title": "Finance Available", "desc": "Flexible finance options tailored to you."},
      {"icon": "Truck", "title": "UK Delivery", "desc": "Safe delivery to your doorstep."}
    ],
    "testimonials": [],
    "finance_enabled": true,
    "finance_apr": "9.9",
    "about_text": ""
  },
  "seo": {
    "business_name": null,
    "city": null,
    "county": null,
    "address": null,
    "phone": null,
    "email": null,
    "opening_hours": {
      "mon": {"open": true, "start": "09:00", "end": "18:00"},
      "tue": {"open": true, "start": "09:00", "end": "18:00"},
      "wed": {"open": true, "start": "09:00", "end": "18:00"},
      "thu": {"open": true, "start": "09:00", "end": "18:00"},
      "fri": {"open": true, "start": "09:00", "end": "18:00"},
      "sat": {"open": true, "start": "09:00", "end": "17:00"},
      "sun": {"open": false, "start": "10:00", "end": "16:00"}
    },
    "ico_number": null,
    "google_business_url": null
  },
  "integrations": {
    "google_maps_key": null,
    "google_analytics_id": null,
    "meta_pixel_id": null,
    "codeweavers_code": null,
    "live_chat_code": null
  }
}';
ALTER TABLE dealerships ADD COLUMN IF NOT EXISTS dealership_api_key text DEFAULT gen_random_uuid();
ALTER TABLE dealerships ADD COLUMN IF NOT EXISTS website_domain text;

-- Create index for API key lookups
CREATE INDEX IF NOT EXISTS idx_dealership_api_key ON dealerships(dealership_api_key);
