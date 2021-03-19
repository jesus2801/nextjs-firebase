import Swal from 'sweetalert2';
import { MouseEvent } from 'react';
import { NextRouter } from 'next/router';

const minute = 60;
const hour = 60 * 60;
const day = hour * 24;
const month = day * 30;
const year = month * 12;

export default {
  createRipple: function (
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLLabelElement>
  ) {
    const button: HTMLElement = e.currentTarget;

    const circle: HTMLSpanElement = document.createElement('span');
    const diameter: number = Math.max(
      button.clientWidth,
      button.clientHeight
    );
    const radius: number = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple: Element = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  },

  handleLoading: function (state: boolean, title?: string): void {
    if (state) {
      Swal.fire({
        title: title || 'Loading',
        didOpen: () => {
          Swal.showLoading();
        },
      });
      return;
    }

    Swal.close();
  },

  successRegister: function (Router: NextRouter) {
    //success register
    Swal.fire({
      title: 'Account created!',
      text: 'Your account has been created successfully',
      icon: 'success',
      didClose: () => {
        Router.push('/');
      },
    });
  },

  productCreated: function (Router: NextRouter) {
    //success register
    Swal.fire({
      title: 'Product created!',
      text: 'Your product has been created successfully',
      icon: 'success',
      didClose: () => {
        Router.push('/');
      },
    });
  },

  convertToDate: function (number: number) {
    number /= 1000;
    const seconds = number >= 0 && number < minute;
    const minutes = number >= minute && number < hour;
    const hours = number >= hour && number < day;
    const days = number >= day && number < month;
    const months = number >= month && number < year;
    const years = number >= year;

    if (seconds) {
      return `${Math.floor(number)} seconds`;
    } else if (minutes) {
      return `${Math.floor(number / minute)} minutes`;
    } else if (hours) {
      return `${Math.floor(number / hour)} hours`;
    } else if (days) {
      return `${Math.floor(number / day)} days`;
    } else if (months) {
      return `${Math.floor(number / month)} months`;
    } else if (years) {
      return `${Math.floor(number / year)} years`;
    }
  },
};
