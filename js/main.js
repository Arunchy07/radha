let bannerList = [
  {
    imgUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/722234137289861.6208cde2e2371.jpg",
  },
  {
    imgUrl:
      "https://thumbs.dreamstime.com/b/lady-hygiene-realistic-poster-pads-brand-symbols-vector-illustration-lady-hygiene-poster-211691651.jpg",
  },

  {
    imgUrl:
      "https://cdn.dribbble.com/users/11260239/screenshots/18523534/durex_condom_promotion_banner_ads_design___instagram_post___banner_design_4x.jpg",
  },
  {
    imgUrl:
      "https://th.bing.com/th/id/OIP.qf_l3RdVsUxYYL6ULa4zZwAAAA?rs=1&pid=ImgDetMain",
  },
];

let bannerContainer = document.querySelector(".banner1");
createOfferList(bannerList, bannerContainer);

function createOfferList(list, container) {
  list.forEach(function (el) {
    let img = document.createElement("img");
    img.setAttribute("src", el.imgUrl);
    container.append(img);
  });
}

/*   Search Bar
 */

const search = () => {
  const searchbox = document
    .getElementById("search-item")
    .value.trim()
    .toUpperCase();
  const storeitems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = storeitems.getElementsByTagName("h2");

  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

/* ----- Action Search Bar -----*/
function opencontainer() {
  document.getElementById("container3").style.display = "flex";
}
