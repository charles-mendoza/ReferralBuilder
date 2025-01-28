import { IReferral } from "./IReferral.interface";

export interface IReferralPreview {
  headers: string[];
  referrals: IReferral[] | null;
  onEdit?: () => void;
  onDelete?: () => void;
}
