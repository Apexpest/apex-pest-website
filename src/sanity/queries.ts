import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  phone, email, licenseNumber, serviceAreaLabel,
  heroEyebrow, heroHeadline, heroHeadlineAccent, heroSubtext,
  heroStats[]{ value, label }
}`;
