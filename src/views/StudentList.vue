<template>
    <div class="student-list">
      <h1>学生列表</h1>
      <form @submit.prevent="handleSubmit" class="form-container">
        <div class="form-row">
          <div class="form-group">
            <label for="name">姓名：</label>
            <input id="name" v-model="newStudent.name" placeholder="请输入姓名" required />
          </div>
          <div class="form-group">
            <label for="age">年龄：</label>
            <input id="age" v-model="newStudent.age" type="number" placeholder="请输入年龄" required />
          </div>
          <div class="form-group">
            <label for="grade">年级：</label>
            <input id="grade" v-model="newStudent.grade" placeholder="请输入年级" required />
          </div>
          <button type="submit">{{ currentIndex === null ? '添加学生' : '更新学生' }}</button>
        </div>
      </form>
  
      <table class="student-table">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>年级</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.grade }}</td>
            <td>
              <button @click="editStudent(index)">编辑</button>
              <button @click="removeStudent(index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'StudentList',
    setup() {
      const students = ref([
        { name: '张三', age: 20, grade: '大一' },
        { name: '李四', age: 21, grade: '大二' },
        { name: '王五', age: 19, grade: '大三' },
      ]);
      const newStudent = ref({ name: '', age: '', grade: '' });
      const currentIndex = ref(null);
  
      const addStudent = () => {
        students.value.unshift({ ...newStudent.value });
        clearForm();
      };
  
      const updateStudent = () => {
        if (currentIndex.value !== null) {
          const updatedStudent = { ...newStudent.value };
          students.value.splice(currentIndex.value, 1);
          students.value.unshift(updatedStudent);
          clearForm();
          currentIndex.value = null;
        }
      };
  
      const handleSubmit = () => {
        if (currentIndex.value === null) {
          addStudent();
        } else {
          updateStudent();
        }
      };
  
      const editStudent = (index) => {
        newStudent.value = { ...students.value[index] };
        currentIndex.value = index;
      };
  
      const removeStudent = (index) => {
        students.value.splice(index, 1);
      };
  
      const clearForm = () => {
        newStudent.value = { name: '', age: '', grade: '' };
      };
  
      return { students, newStudent, currentIndex, handleSubmit, editStudent, removeStudent };
    },
  };
  </script>
  
  <style scoped>
  .student-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh; /* 让内容垂直居中，占据整个视口高度 */
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-container {
    width: 100%;
    max-width: 800px;
    margin-bottom: 20px;
    
  }
  
  .form-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  
  .form-group {
    display: flex;
    align-items: center;
  }
  
  .form-group label {
    margin-right: 5px;
  }
  
  .form-group input {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100px;
    
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .student-table {
    width: 100%;
    max-width: 800px;
    border-collapse: collapse;
  }
  
  .student-table th,
  .student-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  .student-table th {
    background-color: #f2f2f2;
  }
  
  .student-table td button {
    margin: 2px;
    padding: 6px 12px;
    font-size: 14px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .student-table td button:hover {
    background-color: #0056b3;
  }
  </style>
  