import React from "react";
import swal from "sweetalert";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          swal("Failed to Make Admin!", "", "error");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          swal("Admin Added Successfully!", "", "success");
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove Admin</button>
      </td>
    </tr>
  );
};

export default UserRow;
