import { User } from "../../types";

const calculateAge = (birthDate: string) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

export const formatBirthday = (birthDate: string) => {
  const date = new Date(birthDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const age = calculateAge(birthDate);

  return `${day}.${month}.${year} (${age} years old)`;
};

export const formatPhoneNumber = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10) {
    return phone;
  }

  const formattedDigits = digits.slice(-10);

  return `(${formattedDigits.slice(0, 3)}) ${formattedDigits.slice(3, 6)}-${formattedDigits.slice(6)}`;
}

export const formatGeneralInfo = (user: User): string => {
  const bloodGroup = user.bloodGroup ? `Blood Group "${user.bloodGroup}"` : '';
  const height = user.height ? `Height ${user.height}` : '';
  const weight = user.weight ? `Weight ${user.weight}` : '';
  const hairColor = user.hair?.color ? `Hair Color ${user.hair.color}` : '';

  return [bloodGroup, height, weight, hairColor].filter(Boolean).join('; ');
}

export const getDomainFromEmail = (email: string): string => {
  const emailParts = email.split("@");
  return emailParts.length > 1 ? emailParts[1] : "";
};
