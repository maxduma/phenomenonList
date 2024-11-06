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
