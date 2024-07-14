import React from "react";
import Image from "next/image";
const TechnologiesTable = () => {
  return (
    <div className="compare-web px-5 sm:px-20 pb-8">
      <table className="table-auto w-full" id="compare">
        <thead>
          <tr>
            <th
              colSpan="3"
              className="text-center bg-[#182b50] text-white uppercase py-2 border"
            >
              Technologies we use
            </th>
          </tr>
          <tr>
            <th className="w-1/3 p-2 bg-[#E9FF97] border">Frontend</th>
            <th className="w-2/5 p-2 bg-[#8cdaf8] border">Backend</th>
            <th className="w-1/3 p-2 bg-emerald-300 border">CMS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">
              <Image
                src="/img/frontend.png"
                alt="Shopping Logo"
                width={900}
                height={900}
                className="object-cover rounded-lg"
              />
            </td>
            <td className="p-2 border">
              <Image
                src="/img/backend.png"
                alt="Shopping Logo"
                width={900}
                height={900}
                className="object-cover rounded-lg"
              />
            </td>
            <td className="p-2 border">
              <Image
                src="/img/cms.png"
                alt="Shopping Logo"
                width={900}
                height={900}
                className="object-cover rounded-lg"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TechnologiesTable;
