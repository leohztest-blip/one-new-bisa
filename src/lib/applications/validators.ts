import { z } from "zod";
export const appSchema = z.object({ name_en: z.string().min(1), mobile: z.string().min(1), email: z.string().email(), current_office_name: z.string().min(1), current_designation: z.string().min(1), membership_type: z.string().min(1), declaration_accepted: z.boolean().refine(Boolean) }).passthrough();
