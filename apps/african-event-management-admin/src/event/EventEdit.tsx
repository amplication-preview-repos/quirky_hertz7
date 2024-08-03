import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AttendeeTitle } from "../attendee/AttendeeTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendees"
          reference="Attendee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendeeTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="category"
          label="category"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
