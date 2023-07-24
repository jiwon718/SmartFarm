// '인증번호 전송' 버튼 기능 추가하기
// : 휴대전화 인증번호 API 사용하기
// : 재전송 관련 기능 추가 고민하기
// '다음' 버튼 인증 완료 후 활성화 추가하기
// '다음' 버튼 클릭 시 서버에서 이름, 아이디, 전화번호로 비밀번호 찾은 후 결과 받기
// 성공, 실패에 따라 결과 페이지 이동하기
// 성공 시 임시 비밀번호를 전화번호로 보내주기

import { Grid } from '@mui/material';
import TextFieldDefault from '../common/TextFieldDefault';
import TextFieldWithButton from '../common/TextFieldWithButton';
import ButtonDefault from '../common/ButtonDefault';

const SearchId = ({
    name,
    id,
    phoneNumber,
    onNameChange,
    onIdChange,
    onPhoneNumberChange,
    goBack,
    goNext
}) => {
    return (
        <div>
            <TextFieldDefault
                label="이름"
                autoFocus={true}
                value={name}
                onChange={onNameChange}
            />
            <TextFieldDefault
                label="아이디"
                disabled={name === ''}
                value={id}
                onChange={onIdChange}
                sx={{ mb: 3 }}
            />
            <Grid container rowSpacing={3}>
                <TextFieldWithButton
                    textFieldLabel="휴대전화번호('-' 제외)"
                    textFieldDisabled={name === '' || id === ''}
                    textFieldOnChange={onPhoneNumberChange}
                    buttonDisabled={name === '' || id === '' || phoneNumber === ''}
                    buttonText="인증번호 전송"/>
                <TextFieldWithButton
                    textFieldLabel="인증번호"
                    textFieldDisabled={true}
                    buttonDisabled={true}
                    buttonText="인증번호 확인"
                />
            </Grid>
            <ButtonDefault
                disabled={false}
                color="secondary"
                sx={{
                    mt: 6.5,
                    mb: 2,
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                onClick={goNext}
                text="다음"
            />
            <ButtonDefault
                color="secondary"
                sx={{
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}
                onClick={goBack}
                text="취소"
            />
        </div>
    );
};

export default SearchId;