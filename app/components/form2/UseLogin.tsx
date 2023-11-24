import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { toast } from "react-toastify";
interface FormRegister {
  userName: string;
  birth: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
let defaultValues: FormRegister = {
  email: "",
  password: "",
  userName: "",
  birth: "",
  phone: "",
  passwordConfirmation: "",
};
let regexUser =
  /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
const Uselogin = () => {
  const schema = yup.object().shape(
    {
      email: yup
        .string()
        .trim()
        .email("Trường này không phải Email")
        .required("Yêu cầu buộc nhập trường này"),
      userName: yup
        .string()
        .required("Yêu cầu buộc nhập trường này")
        .trim()
        .min(3, "Nhập ít nhất 3 kí tự")
        .matches(regexUser, "Họ Tên không đúng định dạng"),
      password: yup
        .string()
        .trim()
        .required("Yêu cầu buộc nhập trường này")
        .min(5, "Nhập ít nhất 5 kí tự"),
      passwordConfirmation: yup
        .string()
        .trim()
        .required("Mật khẩu không trùng khớp")
        .oneOf([yup.ref("password")], "Mật khẩu không trùng khớp"),
      birth: yup
        .string()
        .trim()
        .when("birth", (val, schema) => {
          return yup.string().notRequired();
        }),
      phone: yup
        .string()
        .trim()
        .when("phone", (val: any, schema) => {
          if (val?.toString().replace(/^\s+|\s+$/gm, "").length > 0) {
            console.log(val)
            return yup
              .string()
              .min(10, "Nhập ít nhất 10 kí tự số")
              .max(12, "Tối đa 12 chữ số")
              .matches(/^-?\d+\.?\d*$/, "Không chứa kí tự chữ");
          } else {
            console.log(val)
            return yup.string().notRequired();
          }
        }),
    },
    [
      ["birth", "birth"],
      ["phone", "phone"],
    ]
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegister>({
    mode: "onBlur",
    defaultValues,
    // resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormRegister) => {
    console.log(data, "data");
    // toast(":unicorn_face: Đăng kí thành công", {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
  };
  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
};
export default Uselogin;