import { AfterContentInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectModal } from 'src/app/_model/CommonModal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {

  constructor(private senitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  ImageSource = "assets/images/projects/"

  ProjectArray: ProjectModal[] = [
    {
      title: "Location Tracker (WebApp & Android App)",
      detailList: [
        {
          isBold: false,
          boldText: "",
          text: "Location Tracker is a web application which helps you to track your friends current location by opening generated URL."
        },
        {
          isBold: false,
          boldText: "",
          text: "Once location is created ,Location Tracking URL is generated and you can share it with your friends."
        },
        {
          isBold: false,
          boldText: "",
          text: "Once your friend visits the URL , Current location of your friend is tracked and push notification is sent in android app."
        }
      ],
      skillBedges: [
        "React.js",
        "React Native",
        "Firebase",
        "Push Notification",
        "Node.js",
        "Sequelize ORM",
        "MySql",
        "Bootstrap",
        "Google Map",
        "OTP Authentication",
        "MUI"
      ],
      visitUrl: "https://tracker.idonttrust.me/",
      mainImage: `${this.ImageSource}tracker_web/main-image.PNG`,
      clickEvent: () => {
        this._mklbOpen(document.getElementById('tracker-web'), 'TrackerWeb');
      },
      classLabel: "tracker-web",
      images: [
        `${this.ImageSource}tracker_web/main-image.PNG`,
        `${this.ImageSource}tracker_web/1.PNG`,
        `${this.ImageSource}tracker_web/2.PNG`,
        `${this.ImageSource}tracker_web/3.PNG`,
        `${this.ImageSource}tracker_web/app/0.jpeg`,
        `${this.ImageSource}tracker_web/app/1.jpeg`,
        `${this.ImageSource}tracker_web/app/2.jpeg`,
        `${this.ImageSource}tracker_web/app/3.jpeg`,
        `${this.ImageSource}tracker_web/app/4.jpeg`,
        `${this.ImageSource}tracker_web/app/5.jpeg`,
        `${this.ImageSource}tracker_web/app/6.jpeg`
      ]
    },
    {
      title: "Solution Stuff (WIP)",
      detailList: [
        {
          isBold: false,
          boldText: "",
          text: "Creating Learning platform which includes Programming ,Codding with solution stuffs."
        },
        {
          isBold: false,
          boldText: "",
          text: "This WebApp includes two different platforms with different technologies."
        },
        {
          isBold: true,
          boldText: "Admin Panel",
          text: " For creating dynamic content where I have used text editor for generating HTML content using Angular."
        },
        {
          isBold: true,
          boldText: "Client Side",
          text: " On the client-side, I have used Next.js SSG (Static Site Generation) for making App SEO-friendly."
        }
      ],
      skillBedges: [
        "Angular", "Next.js", "Node.js", "Sequelize ORM", "MySql", "Bootstrap", "Material UI", "MUI"
      ],
      visitUrl: "https://learn.client.idonttrust.me/",
      mainImage: `${this.ImageSource}solution_stuff/main-image.PNG`,
      clickEvent: () => {
        this._mklbOpen(document.getElementById('solution-stuff'), 'SolutionStuff');
      },
      classLabel: "solution-stuff",
      images: [
        `${this.ImageSource}solution_stuff/main-image.PNG`,
        `${this.ImageSource}solution_stuff/1.PNG`,
        `${this.ImageSource}solution_stuff/2.PNG`,
        `${this.ImageSource}solution_stuff/admin_1.PNG`,
        `${this.ImageSource}solution_stuff/admin_2.PNG`,
        `${this.ImageSource}solution_stuff/admin_3.PNG`,
        `${this.ImageSource}solution_stuff/admin_4.PNG`
      ]
    },
    {
      title: "Task Management",
      detailList: [
        {
          isBold: false,
          boldText: "",
          text: "This was my first full stack project.With this project I have learned APIs, JOBs, Email Verification using OTP, Task status notification using email and many more."
        },
        {
          isBold: false,
          boldText: "",
          text: "User based task management system with auto email notification of task status."
        }
      ],
      skillBedges: [
        "Angular", "NGXS", "Laravel", "MySql", "Bootstrap", "Material UI", "Chart.js"
      ],
      visitUrl: "https://taskmanage.idonttrust.me/",
      mainImage: `${this.ImageSource}task_management/main-image.PNG`,
      clickEvent: () => {
        this._mklbOpen(document.getElementById('task-management'), 'TaskManagement');
      },
      classLabel: "task-management",
      images: [
        `${this.ImageSource}task_management/main-image.PNG`,
        `${this.ImageSource}task_management/1.PNG`,
        `${this.ImageSource}task_management/2.PNG`,
        `${this.ImageSource}task_management/3.PNG`,
      ]
    },
  ];

  svgIcons = {
    close: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
    next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
    prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
  }

  mklbItems = document.getElementsByClassName('mfp-image');
  taskManagement = document.getElementsByClassName('task-management');
  solutionStuff = document.getElementsByClassName('solution-stuff');
  trackerWeb = document.getElementsByClassName('tracker-web');
  lightboxContainer: any;




  _mklbOpen(mklbItem, type) {
    this.lightboxContainer = document.createElement('div');
    this.lightboxContainer.id = "mkLightboxContainer";

    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    this.lightboxContainer.appendChild(overlay);
    if (type == 'Other') {
      this._mklbAddGallery(mklbItem, this.mklbItems);
    } else if (type == 'TaskManagement') {
      this._mklbAddGallery(mklbItem, this.taskManagement);
    } else if (type == 'SolutionStuff') {
      this._mklbAddGallery(mklbItem, this.solutionStuff);
    } else if (type == 'TrackerWeb') {
      this._mklbAddGallery(mklbItem, this.trackerWeb);
    }

    let closeIconContainer = document.createElement('div');
    closeIconContainer.id = "closeIconContainer";
    closeIconContainer.innerHTML = this.svgIcons.close;
    this.lightboxContainer.appendChild(closeIconContainer);
    closeIconContainer.addEventListener('click', () => { this._closeLightbox() })

    document.body.appendChild(this.lightboxContainer);
    overlay.addEventListener('click', () => { this._closeLightbox() })
    document.getElementById("nextContainer").click();
  }

  _mklbAddImage(item) {
    let image = document.createElement('img');
    image.id = 'mklbImage';
    image.src = ('src' in item.dataset) ? item.dataset.src : item.src;
    return image;
  }

  _mklbAddGallery(currentItem, items) {
    let gallery = [];
    let index = 0;

    let mklbInner = document.createElement('div');
    mklbInner.id = 'mklbInner';

    for (let i = 0; i < items.length; i++) {
      if ('gallery' in items[i].dataset) {
        gallery.push(items[i]);
        if (items[i] === currentItem) {
          index = i;
        }
        let imageContainer = document.createElement('section');
        imageContainer.className = 'imageContainer';
        imageContainer.appendChild((this._mklbAddImage(items[i])));
        mklbInner.appendChild(imageContainer);
      };
    }

    mklbInner.style.marginLeft = (index - 1) * (-100) + 'vw';
    this.lightboxContainer.appendChild(mklbInner);

    let prev = document.createElement('div');
    prev.id = 'prev';
    prev.innerHTML = this.svgIcons.prev;
    let prevContainer = document.createElement('div');
    prevContainer.id = "prevContainer";
    prevContainer.appendChild(prev);
    this.lightboxContainer.appendChild(prevContainer);
    prevContainer.addEventListener('click', () => this._mklbSlide(true));

    let next: any = document.createElement('div');
    next.id = 'next';
    next.setAttribute('data-next', (index <= gallery.length) ? index + 1 : 1);
    next.innerHTML = this.svgIcons.next;
    let nextContainer = document.createElement('div');
    nextContainer.id = "nextContainer";
    nextContainer.appendChild(next);
    this.lightboxContainer.appendChild(nextContainer);
    nextContainer.addEventListener('click', () => this._mklbSlide(false));
  }

  _closeLightbox() {
    document.getElementById('mkLightboxContainer').remove()
  }

  _mklbSlide(slideToPrev) {
    let inner = document.getElementById('mklbInner');
    let elements = document.getElementsByClassName('imageContainer').length;
    let marginLeft: any = inner.style.marginLeft;
    marginLeft = parseInt(marginLeft.slice(0, marginLeft.length - 2));

    if (slideToPrev && marginLeft === 0) {
      inner.style.marginLeft = (elements - 1) * -100 + 'vw';
    } else if (slideToPrev) {
      inner.style.marginLeft = (marginLeft + 100) + 'vw';
    } else if (marginLeft === (elements - 1) * -100) {
      inner.style.marginLeft = '0vw';
    } else {
      inner.style.marginLeft = (marginLeft - 100) + 'vw';
    }
  }

  _mklbAddVideo(item) {
    let video: any = document.createElement('video');
    video.setAttribute('autoplay', true);
    video.setAttribute('controls', true);
    let source = document.createElement('source');
    source.src = item.dataset.videoSrc;
    source.type = 'video/mp4';
    video.appendChild(source);
    return video;
  }

}
