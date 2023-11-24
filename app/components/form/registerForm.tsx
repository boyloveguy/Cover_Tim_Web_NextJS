import React from 'react'
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import {
    TextField, Box, Stack, Container, Button,
    FormControl, InputLabel, OutlinedInput, InputAdornment,
    IconButton, FormHelperText
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const register = yup.object().shape({
    firstName: yup.string().required('This input can not empty'),
    lastName: yup.string().required('This input can not empty'),
    company: yup.string(),
    email: yup.string().required('This input can not empty').email(),
    phoneNumber: yup.string().trim()
        .when("phone", (val: any, schema) => {
            if (val?.toString().replace(/^\s+|\s+$/gm, "").length > 0) {
                return yup
                    .string()
                    .min(9, 'Phone number must more than 9 numbers')
                    .max(10, 'Phone number must less than 10 numbers')
                    .matches(/^-?\d+\.?\d*$/, "No have word characters");
            } else {
                return yup.string().required('This input can not empty');
            }
        }),
    // birth: yup.date().default(() => new Date()),
    birth: yup.string().required('This input can not empty'),
    password: yup.string().trim().required('This input can not empty').min(6, 'Password is more 6 characters'),
    confirmPassword: yup.string().trim().required('This input can not empty').oneOf([yup.ref('password')], 'Password incorrect'),
},
    [
        ["birth", "birth"],
        ["phone", "phone"],
    ]
);

export default function registerForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const { control, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(register)
    })
    const onSubmit = (data: Object) => console.log(data);

    return (
        <Container>
            <Box m={'50px'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack justifyContent={'center'} alignItems={'center'} spacing={3}>
                        <Stack justifyContent={'center'} alignItems={'center'} direction={'row'} spacing={4}>
                            <Controller
                                control={control}
                                name="firstName"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        error={Boolean(errors.firstName)}
                                        id="outlined-error-helper-text"
                                        label="First Name"
                                        defaultValue=""
                                        helperText={errors.firstName ? errors.firstName.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="lastName"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        error={Boolean(errors.lastName)}
                                        id="outlined-error-helper-text"
                                        label="Last Name"
                                        defaultValue=""
                                        helperText={errors.lastName ? errors.lastName.message : ''}
                                    />
                                )}
                            />
                        </Stack>

                        <Stack justifyContent={'center'} alignItems={'center'} spacing={3} >
                            <Controller
                                control={control}
                                name="company"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        sx={{
                                            width: '480px'
                                        }}
                                        error={Boolean(errors.company)}
                                        id="outlined-error-helper-text"
                                        label="Company"
                                        defaultValue=""
                                        helperText={errors.company ? errors.company.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="email"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        sx={{
                                            width: '480px'
                                        }}
                                        error={Boolean(errors.email)}
                                        id="outlined-error-helper-text"
                                        label="Email"
                                        defaultValue=""
                                        helperText={errors.email ? errors.email.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="phoneNumber"
                                rules={{ required: true }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        sx={{
                                            width: '480px'
                                        }}
                                        error={Boolean(errors.phoneNumber)}
                                        id="outlined-error-helper-text"
                                        label="Phone Number"
                                        defaultValue=""
                                        helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                control={control}
                                name="birth"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextField
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        sx={{
                                            width: '480px'
                                        }}
                                        error={Boolean(errors.birth)}
                                        id="outlined-error-helper-text"
                                        label="Birth"
                                        defaultValue=""
                                        helperText={errors.birth ? errors.birth.message : ''}
                                    />
                                )}
                            />
                        </Stack>

                        <Stack justifyContent={'center'} alignItems={'center'} direction={'row'} spacing={4}>
                            <Controller
                                control={control}
                                name="password"
                                rules={{ required: true }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <FormControl
                                        key={1}
                                        sx={{ m: 1, width: '25ch' }} variant="outlined"
                                        error={Boolean(errors.confirmPassword)}
                                        placeholder="admin@materialize.com">
                                        <InputLabel
                                            htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            value={value}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        // aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        // onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                        {errors.password && (
                                            <FormHelperText sx={{ color: "error.main" }} id="">
                                                {errors.password.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>

                                )}
                            />
                            <Controller
                                control={control}
                                name="confirmPassword"
                                rules={{ required: true }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <FormControl key={2} sx={{ m: 1, width: '25ch' }} variant="outlined" error={Boolean(errors.confirmPassword)} >
                                        <InputLabel
                                            htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                        <OutlinedInput
                                            value={value}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        // aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        // onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Confirm Password"
                                        />
                                        {errors.confirmPassword && (
                                            <FormHelperText sx={{ color: "error.main" }} id="">
                                                {errors.confirmPassword.message}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                )}
                            />
                        </Stack>
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{
                                backgroundColor: 'blue !important',
                                width: '480px'
                            }}>
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Container>
    )
}