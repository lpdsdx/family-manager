import React from 'react';
import Form from './components/Form';
import MemberSelector from './components/MemberSelector';
import DateTimePicker from './components/DateTimePicker';
import DiagnosisAutoComplete from './components/DiagnosisAutoComplete';
import MedicineEditor from './components/MedicineEditor';
import FileUploader from './components/FileUploader';

interface MedicalRecord {
  id: string;
  familyMember: string;
  visitDate: Date;
  hospital: string;
  diagnosis: string;
  prescription: Medicine[];
  attachments: File[];
}

interface Medicine {
  name: string;
  dosage: string;
  frequency: string;
  reminderEnabled: boolean;
}

export default function MedicalRecord() {
  return (
    <Form>
      <MemberSelector />
      <DateTimePicker label="就诊时间" />
      <DiagnosisAutoComplete />
      <MedicineEditor />
      <FileUploader accept=".pdf,.jpg" />
    </Form>
  );
} 