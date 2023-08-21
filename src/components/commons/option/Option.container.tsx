import { Option, Wrapper } from "./Option.style";
import { useEffect, useState } from "react";
import { IPropsOptions } from "./Option.types";

export const Options = (props: IPropsOptions) => {
  const [newOption, setNewOption] = useState({});
  const [optionState, setOptionState] = useState(false);

  const onClickOption = () => {
    setOptionState((prev: boolean) => !prev);
    setNewOption({ ...props.option, state: optionState });
  };

  useEffect(() => {
    console.log("옵션!!");
    // props.options.name === option.name 같으면 해당 배열 삭제하고 새로운 배열 넣기
    props.setOptions([...props.options, newOption]);
    console.log(props.options);
  }, [optionState]);

  return (
    <Wrapper>
      <Option className={optionState ? "on" : ""} onClick={onClickOption}>
        <p>{props.option.name}</p>
        {props.option.price === 0 ? (
          <em>free </em>
        ) : (
          <em>
            +<span>{props.option.price}</span>원
          </em>
        )}
      </Option>
    </Wrapper>
  );
};
