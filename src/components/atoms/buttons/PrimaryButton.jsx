import styled from "styled-components";
import {BaseButton} from "./BaseButton";

export const PrimaryButton = (props) => {
    // children : <PrimaryButton>ああああ</PrimaryButton> とやってタグ内のコンテンツを受け取れるように
    const { children} = props;
    return (
        <SButton>{children}</SButton>
    );
};

const SButton = styled(BaseButton)`
    background-color:#40514e;
`;
