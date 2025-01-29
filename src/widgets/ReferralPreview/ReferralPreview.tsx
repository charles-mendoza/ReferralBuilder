import { useEffect, useRef, useState } from "react";
import { IReferral } from "../../models/IReferral.interface";
import { IReferralPreview } from "../../models/IReferralPreview.interface";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import ReferralsService from "../../apis/referrals.service";
import style from "./ReferralPreview.module.scss";

export const ReferralPreview = ({
  headers,
  referrals,
  onEdit,
  onDelete,
}: IReferralPreview) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<number>(0);

  const editHandler = () => {
    // TODO: Edit handler logic
    if (onEdit) onEdit();
  };

  const deleteHandler = async (id: number, avatar?: string) => {
    const userResponse = window.confirm("Are you sure you want to delete?");
    if (userResponse) {
      try {
        await ReferralsService.deleteReferralWithAvatar(id, avatar);
        if (onDelete) onDelete();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const updateHeight = () => {
    if (ref.current) {
      const height = ref.current.getBoundingClientRect().height;
      const listItems = referrals?.length ?? 0;
      const maxLines = Math.floor(height / 48);
      const totalLines = maxLines - listItems;
      setLines(totalLines);
    }
  };

  useEffect(() => {
    updateHeight();
  }, [referrals]);

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div className={style.main}>
      <div className={style.container} ref={ref}>
        <table>
          <thead>
            <tr>
              {headers.map((header: string, i: number) => (
                <th key={`th-${i}`}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {referrals?.map((refer: IReferral, i: number) => (
              <tr key={`tr-${i}`}>
                <td>{refer.name}</td>
                <td>{refer.surname}</td>
                <td>{refer.email}</td>
                <td>{refer.phone}</td>
                <td className={style.actions}>
                  <div className={style.actionBtn} onClick={editHandler}>
                    <IoMdCreate size={18} />
                  </div>
                  <div
                    className={style.actionBtn}
                    onClick={() => deleteHandler(refer.id, refer.avatar)}
                  >
                    <IoMdTrash size={18} />
                  </div>
                </td>
              </tr>
            ))}
            {[...Array(lines)].map((_, index) => (
              <tr key={`empty-${index}`}>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
