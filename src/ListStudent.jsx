import { useSelector, useDispatch } from "react-redux";
import { removeStudent } from "./studentSlice";
import { useNavigate } from "react-router-dom";

export default function ListStudent() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Daftar Siswa</h2>

      <button onClick={() => navigate("/add")}>
        Add Student
      </button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Kelas</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.nama}</td>
              <td>{student.kelas}</td>
              <td>{student.alamat}</td>
              <td>
                <button onClick={() => dispatch(removeStudent(student.id))}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}