import { useState } from "react";

export default function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  // handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  }

  // handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    console.log("Student Data:", student);

    // reset form
    setStudent({
      name: "",
      email: "",
      age: "",
      course: "",
    });
  }

  return (
    <div style={styles.container}>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};