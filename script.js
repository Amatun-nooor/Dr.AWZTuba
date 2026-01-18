// Book Appointment buttons open Google Form in new tab
const bookBtn = document.getElementById('bookBtn');
const bookBtnBottom = document.getElementById('bookBtnBottom');
const googleFormURL = 'https://forms.gle/KcaabSYBuXSeakwj8';

bookBtn.addEventListener('click', () => {
  window.open(googleFormURL, '_blank');
});
bookBtnBottom.addEventListener('click', () => {
  window.open(googleFormURL, '_blank');
});

// Services content data
const servicesData = {
  gynae: {
    title: 'General Gynaecology Consultation',
    content: `Comprehensive consultation for all gynaecological issues including menstrual disorders, infections, and preventive care.`,
    image: 'https://images.unsplash.com/photo-1588776814546-4b4c6a188b4d?auto=format&fit=crop&w=600&q=80'
  },
  laparoscopic: {
    title: 'Laparoscopic & Minimally Invasive Surgery',
    content: `Advanced laparoscopic techniques for a range of surgeries with minimal downtime and better recovery.`,
    image: 'https://images.unsplash.com/photo-1588776824651-58223edb7eaf?auto=format&fit=crop&w=600&q=80'
  },
  fertility: {
    title: 'Infertility & Fertility Treatment',
    content: `Personalized treatment plans for infertility including IVF guidance and support.`,
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=600&q=80'
  },
  pcos: {
    title: 'PCOS & Hormonal Disorders',
    content: `Diagnosis and management of PCOS and other hormonal imbalances affecting women's health.`,
    image: 'https://images.unsplash.com/photo-1588776815053-8f0b6d6c44d6?auto=format&fit=crop&w=600&q=80'
  },
  menopause: {
    title: 'Menstrual & Menopause Care',
    content: `Care and treatment for menstrual disorders and menopausal symptoms to improve quality of life.`,
    image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=600&q=80'
  }
};

const serviceButtons = document.querySelectorAll('.service-btn');
const serviceContentDiv = document.getElementById('service-content');

serviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-service');
    const data = servicesData[key];
    serviceContentDiv.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.content}</p>
      <img src="${data.image}" alt="${data.title}" />
    `;
  });
});

// Chatbot logic (simple mock AI)
const chatLog = document.getElementById('chatlog');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

const botResponses = {
  hello: "Hello! How can I assist you with Dr. Amtul Wafi Tuba's services or appointments?",
  appointment: "You can book an appointment using the 'Book Appointment' button above.",
  services: "We offer gynaecology consultation, laparoscopic surgery, fertility treatments, and more. Click the 'Services' menu for details.",
  default: "I'm sorry, I didn't understand that. Please ask about appointments or services."
};

sendBtn.addEventListener('click', () => {
  const userInput = chatInput.value.toLowerCase().trim();
  if (!userInput) return;

  addChatMessage('You', chatInput.value);
  chatInput.value = '';

  // Simple keyword based response
  let response = botResponses.default;
  if (userInput.includes('hello') || userInput.includes('hi')) response = botResponses.hello;
  else if (userInput.includes('appointment') || userInput.includes('book')) response = botResponses.appointment;
  else if (userInput.includes('service')) response = botResponses.services;

  setTimeout(() => addChatMessage('AI', response), 600);
});

function addChatMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('chat-message');
  msg.classList.add(sender === 'AI' ? 'ai-message' : 'user-message');
  msg.textContent = `${sender}: ${text}`;
  chatLog.appendChild(msg);
  chatLog.scrollTop = chatLog.scrollHeight;
}



