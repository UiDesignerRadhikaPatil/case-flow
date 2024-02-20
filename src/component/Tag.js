import React from "react";
import Select from "react-select";

function Tag({ addTag }) {
  const options = [
    { _id: "65d4a1df12be2f5b24cb70c1", value: "Gray", label: "Gray", color: "#808080" },
    { _id: "65d4a1df12be2f5b24cb70c1", value: "Demo", label: "Gray", color: "#808080" },
    { _id: "65d4a1df12be2f5b24cb70c1", value: "Gray", label: "Gray", color: "#808080" },
    { _id: "65d4a1df12be2f5b24cb70c1", value: "Gray", label: "Gray", color: "#808080" },
    // { value: "Red", label: "Red", color: "#EE4B2B" },
    // { value: "Orange", label: "Orange", color: "#FFAC1C" },
    // { value: "Lime", label: "Lime", color: "#32CD32" },
    // { value: "Green", label: "Green", color: "#008000" },
    // { value: "Blue", label: "Blue", color: "#0000FF" },
    // { value: "Purple", label: "Purple", color: "#BF40BF" },
    // { value: "Pink", label: "Pink", color: "#F72798" },
  ];
  const handleChange = (selectedOption) => {
    //console.log("handledChange", selectedOption);
    addTag(selectedOption);
  };
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      // console.log("option", data, isDisabled, isFocused, isSelected);
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
        borderRadius: 25,
        // height: 30,
        // width: 80,
        fontSize: 13,
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,

        borderRadius: 25,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,

        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };

  return <Select options={options} onChange={handleChange} isMulti styles={colorStyles} />;
}

export default Tag;
