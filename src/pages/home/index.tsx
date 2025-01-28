import { ReferralBuilderForm } from "../../widgets/ReferralBuilderForm";
import { ReferralPreview } from "../../widgets/ReferralPreview";
import { mock } from "../../mock/mock";
import { useEffect, useState } from "react";
import { IReferral } from "../../models/IReferral.interface";
import ReferralsService from "../../apis/referrals.service";
import style from "./Home.module.scss";

const Home = () => {
  const [referrals, setReferrals] = useState<IReferral[] | null>([]);

  const fetchReferrals = async () => {
    try {
      const data = await ReferralsService.getReferrals();
      setReferrals(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReferrals();
  }, []);

  return (
    <div className={style.main}>
      <div className={style.container}>
        <ReferralBuilderForm
          title={mock.formData.title}
          data={mock.formData.data}
          onCreate={fetchReferrals}
        />
        <ReferralPreview
          headers={mock.previewData.headers}
          referrals={referrals}
          onDelete={fetchReferrals}
        />
      </div>
    </div>
  );
};

export default Home;
