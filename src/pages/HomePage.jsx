import React from 'react'
import '../App.css'
export default function HomePage() {
  const netflixSeriesContent = [
    {
      title: "Stranger Things",
      img: "https://fossbytes.com/wp-content/uploads/2022/06/The-Buzz-Paper-1.jpeg",
      id: "001"
    },
    {
      title: "All of us are dead",
      img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/all-of-us-are-dead-ending.jpg",
      id: "002"
    },
    {
      title: "Wednesday",
      img: "https://www.bloomingtonsouthoptimist.org/wp-content/uploads/2023/01/wednesday-netflix.jpg",
      id: "003"
    },
    {
      title: "money Heist",
      img: "https://english.cdn.zeenews.com/sites/default/files/2021/05/25/938590-money-heist.png",
      id: "004"
    },
    {
      title: "Squad Game",
      img: "https://www.superguidatv.it/wp-content/uploads/2021/10/Squid-game-2-si-far%C3%A0.jpg",
      id: "005"
    },
    {
      title: "Dark",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202006/qc_12.jpeg?size=690:388",
      id: "006"
    },
    {
      title: "Breaking Bad",
      img: "https://www.cnet.com/a/img/resize/31d9798922a9fd0bc47854e1fc8e7b226f2e5e3d/hub/2012/10/16/28212967-cbf2-11e2-9a4a-0291187b029a/breaking-bad-header.jpg?auto=webp&width=1200",
      id: "007"
    },
    {
      title: "Peaky Blinders",
      img: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/01/netflix-cillian-murphy-promet-22du-lourd22-pour-peaky-blinders-saison-6-.jpeg",
      id: "008"
    },
    {
      title: "kaala Paani",
      img: "https://www.cineblues.com//uploads/article/kp-teaser-01-rgb-9-x-16-002-20230919234448856.jpg",
      id: "009"
    },
    {
      title: "The Railway man",
      img: "https://www.koimoi.com/wp-content/new-galleries/2023/09/yrf-netflix-set-multi-year-creative-partnership-starting-with-the-railway-men-001.jpg",
      id: "010"
    },
    {
      title: "Daredevil",
      img: "https://c4.wallpaperflare.com/wallpaper/335/411/593/daredevil-charlie-cox-netflix-wallpaper-preview.jpg",
      id: "011"
    },
    {
      title: "Narcos",
      img: "https://brief.promax.org/images/uploads/5723/narcosposter_cube__twocolumncontent.jpg",
      id: "012"
    },
    {
      title: "Top Boy",
      img: "https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW2FXyezQ3TFpHWepXLPVHX-zDV5S2WyNGbEPzNmrDVFlVyDcGz4eWg6KbA8TCO8TVROeic2fPpHqa0MIG6-AV7YrUSfG2ovJvDVtgGfEta5nvCodR4dhQGzKLyqdf7AXdAwnh3kcB1HI-C5LV00tSHJE0BMDHp4pBo8VQ6rgUNsdVnxw4kVKECWEZ9T7WxXQBHrB6lt_deQink2kTtQPS8L4vAhCx_hESNK9z0v_z4AArKNrV-alOLxbkvhuSelOrUn1bspb4yahVkRb7M_bDh5NhSuqkEC6XQeRVHYYEYQ-9PUhiV_.jpg?r=0c2",
      id: "013"
    },
    {
      title: "Our Planet",
      img: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTX11bs4mpJt2lUANAOLnmTVnxfVJjnlKkYAvFi9Hf5_bKo6OegZz0bTSW0p8tPGzG8GO82bvHiaUHKIlcTwASIXlQmn77DL8r-hgWb2OAtpCpvRJVLixFcUD8UxkydTCq2MWA.jpg?r=e29",
      id: "014"
    },
    {
      title: "After Life",
      img: "https://i.pinimg.com/originals/f1/82/43/f18243b1fd2d5ee7f3c46a96983d7879.jpg",
      id: "015"
    },
    {
      title: "Sex Education",
      img: "https://www.hindustantimes.com/ht-img/img/2023/08/31/1600x900/Screenshot_2023-08-31_235519_1693506340978_1693506363085.png",
      id: "016"
    },
  ]

  const netflixActionMovies = [
    {
      title:"The Night Comes for Us",
      img:"https://metadata-static.plex.tv/d/gracenote/d0ca98e6cccedd136edc075b5bce154a.jpg",
      id:"001"
    },
    {
      title:"Extraction",
      img:"https://woottoncommonsense.com/wp-content/uploads/2020/12/RgOWIjNBqW2ASCmQ3wuGb5GAYnDSRHd1EMipCwJI.jpeg",
      id:"002"
    },
    {
      title:"The Old Guard",
      img:"https://miro.medium.com/v2/resize:fit:1358/0*sbm45GK2WvG_oXic.jpg",
      id:"003"
    },
    {
      title:"Triple Frontier",
      img:"https://occ-0-33-1123.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXI9Ob2A56S0PNV8PM8Ww5Z-gIlwKzGz6PK5CVHE8ouGDVZK41W0bj5_cQ4echqy4p8xc4IgkmmLuMGStgsMPIz6amIDR20zpZ2A9IankKAJe95khNSc9rBNWKXiJ9UxbqtCRA.jpg?r=b25",
      id:"004"
    },
    {
      title:"Wheelman",
      img:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVt-wuVyU4TxbLTq4D9RF8RGsGBVVFnsX2eITVNIBPun257Vi1BccwgSumYLOq0Z9yQgYeagwfWUVPKa7XrMb9etsn241jTB6WPJwKGa40Txn03VmC_T9JK4ZuLjySUqpNcWvQ.jpg?r=f7b",
      id:"005"
    },
    {
      title:"Polar",
      img:"https://occ-0-34-300.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdP4jX3InivJmH3Zms1rSjPFSTe7et5xFLPOz9ygorsiVbKqKpw00ULLoXqLCsHjsf_4T7s7bdz8KwEOn0FlnPBSULD_flC3gmz7eK-hVV8Iz8GVjVCCS-Sh8CZ_dyrG8aEkpQ.jpg?r=a62",
      id:"006"
    },
    {
      title:"Bright",
      img:"https://occ-0-2433-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbEBrD45nXJeLtOYTlQG1QS2xbWaNIHeXFkmEDL3K2l-2a5OjqIwu46ED4Eb0IaHB5eLCjCksPo_y83JullnyH76i566R6WzUHlR245jOuChajpwvUP43b0_8IVg1OKFH8cfjg.jpg?r=57c",
      id:"007"
    },
    {
      title:"Spectral",
      img:"https://flixwatch.co/wp-content/uploads/80098200.jpg.webp",
      id:"008"
    },
    {
      title:"Lost Bullet",
      img:"https://occ-0-41-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZqPykTgWDVt-Nu0Buzv2ZQQ-gDGFL0azuGUrLObAZ4LmMV5hQsgncRLrL266oMIul_g26EdBFaRua7GdLgH77FmlS3Rk3_1WbYXpE9SLAxxPJmuWwhBU7DmdWUKIXJCbb5r9A.jpg?r=506",
      id:"009"
    },
    {
      title:"Kate",
      img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/447b02151670607.630ff9c255f5a.jpg",
      id:"010"
    },
    {
      title:"Spenser Confidential",
      img:"https://occ-0-38-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQlrqsYEYKGH8fLLa_d54CGtygPyZToN_SFI6M1fnB3azkHl3HQcIv-IxzbfMrQMimzrsx8dBcLjsbycZhDHYHfT32jBzAg6X77i1-ZQSRAsiEANegJnj2Uf-h5XIst3QeaFuw.jpg?r=a57",
      id:"011"
    },
    {
      title:"6 Underground",
      img:"https://occ-0-114-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZDQb574eK3ctTQpZEHKZ2nfvHWmLPyqEwK_GvAqbQJl7Uwu3LaRf-eZOauzHXVz7Jq5ac2LkjY_9dB9Y_LpcSXOkuO4Mn_fe0rzc3bHBddG6ZrvHOFNOfI6zxMmNyCSrSA7Hw.jpg?r=074",
      id:"012"
    },
    {
      title:"Gunpowder Milkshake",
      img:"https://decider.com/wp-content/uploads/2021/07/GUNPOWDER-MILKSHAKE-NETFLIX-REVIEW.jpg?quality=75&strip=all&w=1200",
      id:"014"
    },
    {
      title:"Anon",
      img:"https://occ-0-1217-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABelovCu1TpsDVxpN-SlwzW1OSSWzIQmMsjsqomgp57iaBSOrlZxhH2kN5RW5mZP_i-j_ijScCVqQUvpJjN8Ep1uPUOLhiM_qOlpVlOXoOzj5wDmPTsjjjvK-bmPOWDRqj2rvBw.jpg?r=5ef",
      id:"015"
    },
  ]

  const netflixRomanceMovie = [
    {
      title:"The Last Paradiso",
      img:"https://occ-0-769-33.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYk0quC4-9qWYVqe79ravzju4BvjjHucAmKwB6XtnQzL26Bc0waLZ_FLtToE7uAhAp6D0XV7ouvEB0XETScekFGh6vCd7QigtVkamMIxSTZ0_ExoO6mleBFtam_HrFUPW3rq_w.jpg?r=47a",
      id:"001"
    },
    {
      title:"Lust Stories 2",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABefmsTKRs7kXznoWaA76E1rsz9-wYB0Jx-G7qk1the-k9MBZmJi1ISCTEccGIZqbv8JHxRlDZE1Frw00cqiUGG29ysFK4XYz151I67208h2Uxrd41Qc7BvcLXHONOni5w2mk.jpg?r=788",
      id:"002"
    },
    {
      title:"Miss Shetty Mr. Polishetty",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfM8ngh69h6z0ZrbRQNS0DhynBQ2PnIR-b8g57QBYNqKVU1UIkr6vUKQ5ZagF8uUM1RD6TSJwcINred4C5g8ZWF7x8TtQYrwPl4.jpg?r=a5f",
      id:"003"
    },
    {
      title:"Fifty Shades of Grey",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUL68Vbj4PqKPhz3KMZkG3OzKQ23-T-uXyUpJABwZasucoPSSczAePaMVDUcRsBenr_2x_0S9T6BdWyH8h54DTplS1aj9L4mWSg.jpg?r=ded",
      id:"004"
    },
    {
      title:"Ala Vaikunthapurramuloo",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd28t0_ZDbM_js-FKEmuk09O4XxrSSMmpBG8-dClZstVKPn_gcRzSNMq6syddGUb7WFZBjMRUFiGCofuvQV4S9GN-hCPyX5HC8o.jpg?r=68e",
      id:"005"
    },
    {
      title:"khusi",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdOdRoCNEWcOaxIaEdq3oKKO-uF2IrjLelDrpxlSNGBy4J0SNUpjWK7Ds3q7SpPsWKSpqV4zEbRdpebrK8S6Nqul-AC3GYVLcsc.jpg?r=41d",
      id:"006"
    },
    {
      title:"The Royal Treatment",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeICC4SoPlnHYp9NlS2PiEAF8gUOlI02rDSMRn_x2qza1TVX8q7d5gY-sLRzfHICigy8G0KYe5KG1MLEtMt4nbr-Rz31DWsK7udteZ3GANzJDl3NUrg1Cl4vbsmfhwIGyYB2.jpg?r=ba6",
      id:"007"
    },
    {
      title:"OK Jaanu",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcTZ9iNMhAh-Bl-Boaflp40NPC8oXem5RKdt4d0TDCfWzBlcq_rwud_KnCu6XboYgltcdImujmP-H1BcFqrXyWoze-FYmmlfghA.jpg?r=0cb",
      id:"008"
    },
    {
      title:"No Hard Feelings",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb2mePe6uqbKReTVT1xk-Xw-746wf2EqRhVjUA51fNpSFF8J5UvqZYjoPehUbEBQhdaAF9-X_UB6IAzMtISCGkRcIFcJn6mwTV0.jpg?r=41e",
      id:"009"
    },
    {
      title:"Malang",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWY7KaZawW83unLQATUZZMLTL00o0UsBh_nZc0hX94O5pDwdV3mD3I1HJVNZx2bd7AZhzpH5u-9UykF3-uGK_QTKdIkSLDRNA3E.jpg?r=23a",
      id:"010"
    },
    {
      title:"Through My Window",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU0vHyXfaJWC4jzRi09ZDV_bytRiQeXnh9GgzaW-SgWGzzhau3uK9U8Z_2H23PglSLUzl47ahIMsugq9umAukO10vEmg_aHGn9XvsLnxS5U8HrYPQqMqp49PQdoCtxi8u79O.jpg?r=fdb",
      id:"011"
    },
    {
      title:"Kabir Singh",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeSEKWZTBygP5AJx8HLkG_XraXPfk5fOJjo1PbsHeFwKw-JznysEt2HuX4Y6zxS5RccAUe8cm2HqRF9XMwvvpgGQ576rFS2vMd4.jpg?r=439",
      id:"012"
    },
    {
      title:"Love at First Sight",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABat3_i7Vx4ocen3z2vpcuJIRW1v4nZvjq7WbI1lynv87Ewl32vxiXurPCvSFmQ30giQ3I9SZUeWi9GN8VadZguGSSO1N58BpJnnKRlm1JV935vZm5dDFpicx9HXW60eg9g9q.jpg?r=dfa",
      id:"013"
    },
    {
      title:"Three (Telugu)",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSfJ__u-PRCCobrq4_gVmUFeposAvGWExXTq7O9YW5f8wCOLYXupR3jQscUvY_ABgW9066gqoKFJOfQqx_TAUS6lXDfFuwYsXLg.jpg?r=351",
      id:"014"
    },
    {
      title:"Lust Stories",
      img:"https://occ-0-4486-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYl294Iuvo7iaEAukg8OFa3tLZ6UANfsWHv1XAq0UV3T_lRglo8XTJhGsm45kPeUcMk2keEsnrcgaM0bdw42eAXzIV33EAHQnpXWA0D3hjbi1orMBXIJhcZp7LUfz_JJfqyz.jpg?r=ec8",
      id:"015"
    },
  ]

  const netflixHorrorContent = [
    {
      title:"the Ritual",
      img:"https://occ-0-64-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdfC78e-c6IhdM2swyqehpXRJcIsAIfzF_zhBKoXjaIRu_joeUWJLti5rR7o1ALrsmUA8fP_6PeRB-wz_VGKka5zIxCs18xCmcgtf5fDBumbJfDKQGdK8JCPcm99lshLz96oxQ.jpg?r=5a6",
      id:"001"
    },
    {
      title:"The Good neighbor",
      img:"https://i.ytimg.com/vi/hYUtMkRUkjs/mqdefault.jpg",
      id:"002"
    },
    {
      title:"The Conference",
      img:"https://www.flixfilm.dk/wp-content/uploads/2023/10/AAAABaYMLrqqxZYdalPjLYBqCZhsY7sK5U-WG6HIGXK2vCKEezn9tmecowvjtxUY-BQSyLQghpfjThNTvsn8Kf-Vm0Miw9JG3RQl32wP5Q1SMf5y3FPejQTxLJ6G_6pJjhUZqBH.jpg",
      id:"003"
    },
    {
      title:"The Unholy",
      img:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWUN8zPSq5BvsoqNQHsRahT6RrCKCZHAXlnIO9Jg_N6UFRS_MSaULIs1J_C5jmwjQfinwg26OwG0TrynbHEI7J5hce-hsJamx4pYenq1EXxEBZm9aT4QoJqDW7pn1TpoOAuoBxRyF6hnijlh7uMSJfHQ5sT8Ui5AspoM2IpHTB5pdc_nMavnqt8mKlq5mF7XukZQqCvEO09MxUKOUhOwcDjivtxZThS6VtHmbtq85Zs-l15CE1toD4nTyBFIevCRCj9MCqPbgAwNm-7ddu7n9h1n1yY.jpg?r=269",
      id:"004"
    },
    {
      title:"Evil Dead",
      img:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/06/EVIL-DEAD-RISE.jpg",
      id:"005"
    },
    {
      title:"Sister Death",
      img:"https://www.heavenofhorror.com/wp-content/uploads/2023/10/sister-death-2023-netflix-horror-review-1200x720.jpg",
      id:"006"
    },
    {
      title:"Insidious the Red Door",
      img:"https://i0.wp.com/thegameofnerds.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-31-at-4.44.39-PM.png?resize=1263%2C640&ssl=1",
      id:"007"
    },
    {
      title:"The Black Phone",
      img:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/11/the-black-phone-what-we-know.jpg",
      id:"008"
    },
    {
      title:"Annabelle",
      img:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWe2APN0ky-8eW8VBpVll6ZuYcscCMu_p9gHBuQcQ1yOFvJnH2BQbqVgLj9mo3OS1C-bYQT0_50mTkrivNvRK9TbF3QtCONsMSPi.jpg?r=370",
      id:"009"
    },
    {
      title:"Babbe The possession",
      img:"https://i.redd.it/j1uigubkkvza1.jpg",
      id:"010"
    },
    {
      title:"The Invitation",
      img:"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21629166_v_h2_af.jpg",
      id:"011"
    },
    {
      title:"No One Gets Out Alive",
      img:"https://www.voicesfromthebalcony.com/wp-content/uploads/2021/09/No-One-Gets-Out-Alive-Art.jpeg",
      id:"012"
    },
    {
      title:"The Conjuring 2",
      img:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc71nrC1xlk5GFNC1lHPwFdVfcFEa7Fme4IgnAaAurd3lwcGlwtK5bfMO9fBvXqu9bMcNHhzBzdsoGDboEe38uOkrYq_vGqjgOJF.jpg?r=94f",
      id:"013"
    },
    {
      title:"Virupaksha",
      img:"https://assets.mspimages.in/gear/wp-content/uploads/2023/05/Untitled-design-74.jpg",
      id:"014"
    },
    {
      title:"Mirrors",
      img:"https://img.etimg.com/thumb/width-640,height-480,imgsize-75530,resizemode-75,msid-99810432/news/new-updates/black-mirror-season-6-on-netflix-release-date-and-all-you-may-want-to-know.jpg",
      id:"015"
    },
  ]
  const netflixSciFanstasy = [
    {
      title:"Jurassic World Camp Cretaceous",
      img:"https://occ-0-300-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYE13YeIY8JyxbhpV3Kzg8uhTsNLOaVMblZ_sTAB8xSoSLbfu_uQg28fCx9R4f0RNYM0XzzYZ1gT41oVBI1VJdP6fwEorFP1RjW5ehDnm6ryvt9e3x4bej-9w1C5NgUzJeen2w.jpg?r=883",
      id:"001"
    },
    {
      title:"One Piece",
      img:"https://staticg.sportskeeda.com/editor/2023/09/5519d-16942998914852-1920.jpg?w=840",
      id:"002"
    },
    {
      title:"Ragnarok",
      img:"https://www.tvguide.com/a/img/resize/9a076118640ee9bf08f9aaac01942f413af9e7d5/catalog/provider/1/1/1-8030188267.JPG?fit=crop&height=675&width=1200",
      id:"003"
    },
    {
      title:"Lost in Space",
      img:"https://i.ytimg.com/vi/bg6Dv9Vbfao/maxresdefault.jpg",
      id:"004"
    },
    {
      title:"Alice in BorderLand",
      img:"https://thekeegshow.com/wp-content/uploads/2022/12/Alice-in-Borderland_poster_2.jpg",
      id:"005"
    },
    {
      title:"Wednesday",
      img:"https://millsthunderbolt.com/wp-content/uploads/2023/01/wednesday-scaled.jpeg",
      id:"006"
    },
    {
      title:"Raising Dion",
      img:"https://occ-0-300-1007.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVcw1tr7VGvIKDhKx0G-qcX6-BfPE8Q3xQf4ytB13FjuQ1JvIw6kOYusGxW59V8Ou6aC7psSgx6iFGKRFsVA18dYC4PCKoFd-KELifQoHF-xhVEFpBAagK9-u5KBsVTFPhY80A.jpg?r=702",
      id:"007"
    },
    {
      title:"Manifest",
      img:"https://imgeng.jagran.com/images/2023/may/ManifestSeason4Part21685438093828.jpg",
      id:"008"
    },
    {
      title:"The Witcher",
      img:"https://magarila.com/the-witcher-posters/the-witcher-posters-2/",
      id:"009"
    },
    {
      title:"Sweet Tooth",
      img:"https://wallpapers.com/images/featured/sweet-tooth-pictures-f0xyjm0tov80s7dr.jpg",
      id:"010"
    },
    {
      title:"Znation",
      img:"https://images.squarespace-cdn.com/content/v1/5ddd135c3983616e4cce1116/1578496152653-1Q6J6QWL7ZROFFNPZ794/Z+Nation.jpg?format=1000w",
      id:"011"
    },
    {
      title:"Locke & Key",
      img:"https://blog.vidangel.com/wp-content/uploads/2022/08/LockeAndKey_Blog_Image.jpg",
      id:"012"
    },
    {
      title:"Another Life",
      img:"https://www.heavenofhorror.com/wp-content/uploads/2019/07/another-life-netflix-review.jpg",
      id:"013"
    },
    {
      title:"Fantasy Island",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12K7ISEY9iOYqnUzzc15p_DwmnWRud6EWqjlwHP6abDZ_9RyeFz4_4DmEN0GFmGdbPTo&usqp=CAU",
      id:"014"
    },
    {
      title:"Shadow and Bone",
      img:"https://i0.wp.com/hollieblog.com/wp-content/uploads/2021/05/Shadow-and-Bone-Netflix.jpg?fit=1170%2C682&ssl=1",
      id:"015"
    },
  ]
  return (
    <div className='w-full h-fit bg-gray-900'>
      <div className='fixed bg-black'>
        <img src="https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608" alt="Stranger Things" />
      </div>
      <div className='HPboxCon  relative w-full h-auto py-5 flex flex-col gap-5 left-0 '>
        <div className='px-10'>
          <h1 className='font-semibold text-2xl text-white'>Continue watching</h1>
          <div className='w-full flex  overflow-x-auto  gap-2'>
            {netflixSeriesContent.map((items) => { // continue from here
              return <div className=" w-72 h-48 flex-none  bg-pink-200" key={items.id}>
                <img src={items.img} alt={items.title} className='w-full h-full overflow-hidden  z-20 hover:scale-125 transition-all ease-in' />
              </div>
            })}
          </div>
        </div>
        <div className='HPboxCon2 px-10 pb-10'>
          <h1 className=' font-semibold text-white  text-2xl'>Action & Adventure</h1>
          <div className='w-full flex  overflow-x-auto  gap-2'>
            {netflixActionMovies.map((items) => { // continue from here
              return <div className=" w-72 h-48 flex-none  bg-pink-200" key={items.id}>
                <img src={items.img} alt={items.title} className='w-full h-full overflow-hidden  z-20 hover:scale-125 transition-all ease-in' />
              </div>
            })}
          </div>
          <h1 className=' font-semibold text-white pt-4 text-2xl'>Romantic & Love Stories </h1>
          <div className='w-full flex  overflow-x-auto  gap-2'>
            {netflixRomanceMovie.map((items) => { // continue from here
              return <div className=" w-72 h-48 flex-none  bg-pink-200" key={items.id}>
                <img src={items.img} alt={items.title} className='w-full h-full overflow-hidden  z-20 hover:scale-125 transition-all ease-in' />
              </div>
            })}
          </div>
          <h1 className=' font-semibold text-white pt-4 text-2xl'>Horror Stories</h1>
          <div className='w-full flex  overflow-x-auto  gap-2'>
            {netflixHorrorContent.map((items) => { // continue from here
              return <div className=" w-72 h-48 flex-none  bg-pink-200" key={items.id}>
                <img src={items.img} alt={items.title} className='w-full h-full overflow-hidden  z-20 hover:scale-125 transition-all ease-in' />
              </div>
            })}
          </div>
          <h1 className=' font-semibold text-white pt-4 text-2xl'>Sci-Fi & Fantasy Stories</h1>
          <div className='w-full flex  overflow-x-auto  gap-2'>
            {netflixSciFanstasy.map((items) => { // continue from here
              return <div className=" w-72 h-48 flex-none  bg-pink-200" key={items.id}>
                <img src={items.img} alt={items.title} className='w-full h-full overflow-hidden  z-20 hover:scale-125 transition-all ease-in' />
              </div>
            })}
          </div>
        </div>
      </div>

    </div>
  )
}
