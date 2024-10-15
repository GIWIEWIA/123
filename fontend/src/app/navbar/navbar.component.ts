import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any = {};

  isAdmin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      // ถอดรหัส token โดยใช้ atob()
      const payload = JSON.parse(atob(token.split('.')[1])); // ดึง payload จาก JWT

      this.user = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        profileImage: payload.imageprofile,
        role: payload.role
      };

      if (this.user.role === 'admin') {
        this.isAdmin = true;
      }
    }
  }

  navigateToProfile(event: Event) {
    event.preventDefault();  // ป้องกันการโหลดหน้าซ้ำ

    const token = localStorage.getItem('token'); // ตรวจสอบ token ใน localStorage
    if (token) {
      this.router.navigate(['/profile']); // ถ้ามี token นำทางไปยังหน้า profile
    } else {
      this.router.navigate(['/login-guest']); // ถ้าไม่มี token นำทางไปยังหน้า login-guest
    }
  }

  
}
