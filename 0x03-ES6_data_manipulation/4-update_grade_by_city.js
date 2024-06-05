export default function updateStudentGradeByCity(lst, city, newGrades) {
  return lst
    .filter((x) => x.location === city)
    .map((std) => {
      const firstGrade = newGrades
        .filter((i) => i.studentId === std.id)
        .map((x) => x.grade)[0];
      const finalGrade = firstGrade || 'N/A';
      return { ...std, finalGrade };
    });
}
