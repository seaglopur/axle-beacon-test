import { Fieldset, Group, Input, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useContext } from "react";
import { IMaskInput } from "react-imask";
import { FormContext } from "../context/FormContext";

interface FormValues {
  name: string,
  address: string,
  city: string,
  state: string,
  zip: number | string,
  code: number | string,
  contact: string,
  phone: number | string,
  email: string,
  ref_number: number | string,
}

const initialFormValues = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  code: '',
  contact: '',
  phone: '',
  email: '',
  ref_number: '',
};

export default function CustomerForm() {
  const { isEditing } = useContext(FormContext);
  const customerForm = useForm<FormValues>({
    initialValues: initialFormValues,
    enhanceGetInputProps: (payload) => {
      if (!payload.form.initialized) {
        return { disabled: true };
      }

      return {};
    },
  });

  if (isEditing && !customerForm.initialized) {
    customerForm.initialize(initialFormValues);
  }

  return (
    <Fieldset disabled={!isEditing} variant="unstyled">
      <TextInput {...customerForm.getInputProps('name')} label="Name" placeholder="e.g. Harvey Rodriguez & Co" />
      <TextInput {...customerForm.getInputProps('address')} label="Address" placeholder="e.g. 37 Jade Mountain, Apr. 2" mt={"sm"} />

      <Group justify="space-between" mt={"sm"}>
        <TextInput {...customerForm.getInputProps('city')} label="City" placeholder="City" w={'46%'} />
        <TextInput {...customerForm.getInputProps('state')} label="State" placeholder="State" w={'46%'} />
      </Group>

      <Group justify="space-between" mt={"sm"}>
        <TextInput {...customerForm.getInputProps('zip')} label="Zip" placeholder="e.g. 89381-6757" w={'46%'} />
        <TextInput {...customerForm.getInputProps('code')} label="Code" placeholder="Code" w={'46%'} />
      </Group>

      <TextInput {...customerForm.getInputProps('contact')} label="Contact" placeholder="e.g. Harvey Rodriguez" mt={"sm"} />

      <Input.Wrapper label="Phone" mt={"sm"}>
        <Input {...customerForm.getInputProps('phone')} component={IMaskInput} mask="000000-0000" placeholder="Your phone" />
      </Input.Wrapper>

      <TextInput {...customerForm.getInputProps('email')} label="Email" placeholder="example@gmail.com" mt={"sm"} />
      <NumberInput {...customerForm.getInputProps('ref_number')} label="Ref number" placeholder="Ref number" mt={"sm"} />
    </Fieldset>
  );
}
