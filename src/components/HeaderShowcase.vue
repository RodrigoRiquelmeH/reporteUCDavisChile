<template>
  <b-navbar
    toggleable="xl"
    fixed="top"
    v-b-scrollspy:nav-scroller
    class="header-area text-white app-showcase-header"
    :class="{ 'is-sticky': scrolled }"
  >
    <div class="container-fluid container-fluid--cp-150">
      <b-link class="menu-btn" @click="toggleClass('addClass', 'active')">
        <i class="fas fa-bars"></i> <span><strong>índice</strong></span>
      </b-link>
      <b-navbar-brand class="navbar-brand logo-light mr-sm-auto" to="/">
        <!-- <img
          src="@/assets/img/logo/logo_horizontal_transparente.png"
          alt="logo"
        /> -->
      </b-navbar-brand>
      <b-navbar-brand class="navbar-brand logo-dark mr-sm-auto" to="/">
        <img
          src="@/assets/img/logo/logo_horizontal_transparente.png"
          alt="logo"
        />
      </b-navbar-brand>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      load: false,
      limitPosition: 200,
      scrolled: false,
      lastPosition: 500,
    };
  },
  mounted() {
    // (function () {
    //   scrollTo();
    // })();
    // function scrollTo() {
    //   const links = document.querySelectorAll(".scroll > a");
    //   links.forEach((each) => (each.onclick = scrollAnchors));
    // }
    // function scrollAnchors(e, respond = null) {
    //   const distanceToTop = (el) => Math.floor(el.getBoundingClientRect().top);
    //   e.preventDefault();
    //   var targetID = respond
    //     ? respond.getAttribute("href")
    //     : this.getAttribute("href");
    //   const targetAnchor = document.querySelector(targetID);
    //   if (!targetAnchor) return;
    //   const originalTop = distanceToTop(targetAnchor);
    //   window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
    //   const checkIfDone = setInterval(function () {
    //     const atBottom =
    //       window.innerHeight + window.pageYOffset >=
    //       document.body.offsetHeight - 190;
    //     if (distanceToTop(targetAnchor) === 0 || atBottom) {
    //       targetAnchor.tabIndex = "-1";
    //       targetAnchor.focus();
    //       //window.history.pushState('', '', targetID);
    //       clearInterval(checkIfDone);
    //     }
    //   }, 800);
    // }
  },
  methods: {
    // sticky menu script
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
        // move up!
      }
      if (this.lastPosition > window.scrollY) {
        this.scrolled = true;
        // move down
      }
      this.lastPosition = window.scrollY;
      this.scrolled = window.scrollY > 50;
    },
    // overlay menu
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector("#overlay-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variabls.scss";
.app-showcase-header {
  padding: 20px 15px;
  a.menu-btn {
    font-size: 25px;
    padding-right: 30px;
  }
  .header-button {
    a {
      background: rgba(46, 50, 128, 0.2);
      border-color: transparent;
    }
  }
  a.menu-btn {
    color: #fff;
    span {
      padding-left: 15px;
      font-size: 28px;
    }
  }
  &.is-sticky {
    padding: 10px 15px;

    a.menu-btn {
      color: $theme-color--default;
      span {
        display: none;
      }
    }
    .header-button {
      a {
        background: transparent;
        color: $theme-color--default;
        border-color: $theme-color--default;
        transition: 0.4s;
        &:hover {
          color: $white;
          background-image: linear-gradient(
            218deg,
            #022851 0,
            #0047ba 50%,
            #022851 100%
          );
        }
      }
    }
  }
  .navbar-brand {
    margin-right: 0;
    justify-content: flex-start;
  }
}
.navbar {
  .container-fluid {
    justify-content: flex-start !important;
  }
}
</style>