const nameInput=document.querySelector('#name');
const mobileInput=document.querySelector('#mobile');
const emailInput=document.querySelector('#email');
const passwordInput=document.querySelector('#password');
const messagenput=document.querySelector('#message');
const success=document.querySelector('#success')
const errorNodes=document.querySelectorAll('.error');

function validateForm()
{
    clearMessages();

    let errorFlag=false;
    //Name//
    if(nameInput.value.length<1)
    {
        errorNodes[0].innerText="Name cannot be empty";
        nameInput.classList.add('border-border');
        errorFlag=true;
    }
    //Mobile//
    if(!CheckContactNumber(mobileInput.value))
    {
        errorNodes[1].innerText="Please enter a valid 10-digit phone number";
        mobileInput.classList.add('border-border');
        errorFlag=true;
    }
    if(mobileInput.value.length<1)
    {
        errorNodes[1].innerText="Mobile cannot be empty";
        mobileInput.classList.add('border-border');
        errorFlag=true;
    }
    //Email//
    if(!setEamilvalidate(emailInput.value))
    {
        errorNodes[2].innerText="invalite email"
        emailInput.classList.add('border-border');
        errorFlag=true;
    }
    if(emailInput.value.length<1)
    {
        errorNodes[2].innerText="Email cannot be empty"
        emailInput.classList.add('border-border');
        errorFlag=true;
    }
    //password//
    if(!CheckPassword(passwordInput.value))
    {
        errorNodes[3].innerText="Please type of Uppercase, lowercase, special character, number, 8 > digit";
        passwordInput.classList.add('border-border');
        errorFlag=true;
    }
    if(passwordInput.value.length<1)
    {
        errorNodes[3].innerText="Password cannot be empty";
        passwordInput.classList.add('border-border');
        errorFlag=true;
    }
    //Message//
    if(messagenput.value.length<1)
    {
        errorNodes[4].innerText="Message cannot be empty";
        messagenput.classList.add('border-border')
        errorFlag=true;
    }
    //Success//
    if(!errorFlag)
    {
        success.innerHTML="FormValidation Successful"
    }
}
function clearMessages()
{
    for(let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText=" ";
    }
    success.innerHTML=" ";
    nameInput.classList.remove("border-border")
    mobileInput.classList.remove("border-border");
    emailInput.classList.remove("border-border");
    passwordInput.classList.remove("border-border");
    messagenput.classList.remove("border-border");
}
function setEamilvalidate(e1)
{
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(e1)
}
function CheckContactNumber(n1)
{
    let num=/^\d{10}$/;
    return num.test(n1)
}
function CheckPassword(pwd) 
{ 
    var password=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return password.test(pwd)
}
import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";

export function Success() {
  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min:Number , max: Number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div className="relative">
      <Button onClick={handleClick}>Success</Button>
    </div>
  );
}
