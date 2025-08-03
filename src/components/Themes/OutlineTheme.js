import React from "react";
const OutlineTheme = ({ config }) => {
  const { title, author, icon, customIcon, iconVersion, iconSize, bgColorLeft, bgColorRight, titleFont, authorFont, titleFontSize, authorFontSize, titleAlign, authorAlign, iconAlign, gradientAngle } = config;

  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const iconAlignments = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const titleFontUrl = `https://fonts.googleapis.com/css2?family=${titleFont.replace(/ /g, "+")}&display=swap`;
  const authorFontUrl = `https://fonts.googleapis.com/css2?family=${authorFont.replace(/ /g, "+")}&display=swap`;

  return (
    <div className="w-full h-full bg-white ">
      <link href={titleFontUrl} rel="stylesheet" />
      <link href={authorFontUrl} rel="stylesheet" />
      <div
        className={`overflow-y-hidden flex flex-col text-gray-800 px-10 h-full`}
        style={{ background: `linear-gradient(${gradientAngle}deg, ${bgColorLeft}, ${bgColorRight})` }}
      >
        <div style={{fontFamily: titleFont}} className={`rounded-2xl py-6 flex flex-col  `}>
          <div
            style={{fontFamily: authorFont}} className={`w-full h-16  flex  mt-auto mb-0 p-2 px-6 items-center ${iconAlignments[authorAlign]}`}>
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <p className={`${authorFontSize} text-white font-semibold`}>
                {author}
              </p>
            </div>
          </div>
          <h1
            className={`${titleFontSize} p-4 text-white font-bold w-full ${alignments[titleAlign]}`}>
            {title}
          </h1>
        </div>
        {customIcon ? (
          <div className=" m-6">
            <img
              src={customIcon}
              alt="img"
              className="rounded-full object-cover w-24 h-24 bg-white p-1 border-white"
            />
          </div>
        ) : (
          <div
            className={`mr-auto ml-2 items-center flex w-full ${iconAlignments[iconAlign]}`}>
            
            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.value}/${icon.value}-${iconVersion}.svg`} style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }}/>

          </div>
        )}
      </div>
    </div>
  );
};

export default OutlineTheme;
