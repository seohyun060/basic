/* eslint-disable no-useless-escape */
export const TEL_PATTERN = /^[0-9]{3}[0-9]{4}[0-9]{4}$/;
export const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
export const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\$`~!@$!%*#^?&\\(\\)\-_=+]{8,16}$/;
export const IMG_PATTERN = /[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/;
export const NAME_PATTERN = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{1,10}$/;
export const NUMBER_PATTERN = /^([0-9]|\n)*?$/;
export const NON_SPACE_PATTERN = /^\S*$/;
