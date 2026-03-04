// 纯浏览器版本 - 文件通过链接直接访问
// 此文件保留用于兼容性，文件打开功能已通过 <a> 标签实现

// 教师简介数据
const teacherData = [
  {
    name: '丁怡',
    files: [
      { name: '匹配说明', type: 'doc', path: 'files/实验班学生匹配说明 丁怡.docx' }
    ]
  },
  {
    name: '周世愚',
    files: [
      { name: '个人介绍PDF', type: 'pdf', path: 'files/导师个人介绍-周世愚.pdf' }
    ]
  },
  {
    name: '王麒植',
    files: [
      { name: '个人介绍PDF', type: 'pdf', path: 'files/导师个人介绍-王麒植.pdf' }
    ]
  },
  {
    name: '范翻',
    files: [
      { name: '个人介绍PDF', type: 'pdf', path: 'files/导师个人介绍-范翻.pdf' }
    ]
  },
  {
    name: '陈怡心',
    files: [
      { name: '个人介绍PDF', type: 'pdf', path: 'files/导师个人介绍-陈怡心.pdf' }
    ]
  },
  {
    name: '耿纯',
    files: [
      { name: '个人介绍DOC', type: 'doc', path: 'files/导师个人介绍_耿纯.docx' }
    ]
  },
  {
    name: '李慧青',
    files: [
      { name: '个人介绍DOC', type: 'doc', path: 'files/李慧青.docx' }
    ]
  },
  {
    name: '王斐然',
    files: [
      { name: '个人介绍DOC', type: 'doc', path: 'files/王斐然 导师个人介绍(1).docx' }
    ]
  },
  {
    name: '阮睿',
    files: [
      { name: '匹配说明', type: 'pdf', path: 'files/实验班学生匹配说明-阮睿.pdf' }
    ]
  }
];

// 打开教师简介弹窗
function openTeacherModal() {
  let modal = document.getElementById('teacherModal');
  if (!modal) {
    modal = createTeacherModal();
    document.body.appendChild(modal);
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 关闭教师简介弹窗
function closeTeacherModal() {
  const modal = document.getElementById('teacherModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// 创建教师简介弹窗
function createTeacherModal() {
  const modal = document.createElement('div');
  modal.id = 'teacherModal';
  modal.className = 'modal-overlay';
  
  let teachersHtml = '';
  teacherData.forEach(teacher => {
    let filesHtml = '';
    teacher.files.forEach(file => {
      filesHtml += `<a href="${file.path}" class="teacher-file-link file-type-${file.type}" target="_blank">${file.name}</a>`;
    });
    teachersHtml += `
      <div class="teacher-section">
        <h4>${teacher.name} 老师</h4>
        <div class="teacher-list">
          <div class="teacher-item">
            <span class="teacher-name">${teacher.name}</span>
            <div class="teacher-files">
              ${filesHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>中心老师简介</h3>
        <button class="modal-close" onclick="closeTeacherModal()">&times;</button>
      </div>
      <div class="modal-body">
        <div class="video-notice">
          <p>📹 导师视频介绍请访问：<a href="https://pan.quark.cn/s/0d701b675f13" target="_blank" class="video-link">https://pan.quark.cn/s/0d701b675f13</a></p>
        </div>
        ${teachersHtml}
      </div>
    </div>
  `;
  
  // 点击遮罩层关闭弹窗
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeTeacherModal();
    }
  });
  
  // ESC键关闭弹窗
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeTeacherModal();
    }
  });
  
  return modal;
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
  console.log('大学生涯表网站已加载');
  
  // 添加文件链接的悬停效果
  const fileLinks = document.querySelectorAll('.file-link');
  fileLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
});

