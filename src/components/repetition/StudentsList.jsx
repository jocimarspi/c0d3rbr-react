import students from "../../data/student";

const StudentsList = () => {
  const renderStudentsList = () =>
    students.map((student) => {
      return (
        <li key={student.id}>
          {student.id}: {student.name} - {student.grade}
        </li>
      );
    });

  return (
    <div>
      <ul style={{listStyleType: "none"}}>{renderStudentsList()}</ul>
    </div>
  );
};

export default StudentsList;
