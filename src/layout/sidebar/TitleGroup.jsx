import React from "react";
import { useHasPermissions } from "../../hook/permissionsHook";

const TitleGroup = ({title, pTitles}) => {
  const hasPerm = useHasPermissions(pTitles)
  return hasPerm && (
    <>
      <h5 className="text-center">{title}</h5>
    </>
  );
};

export default TitleGroup;
