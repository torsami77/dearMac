/* eslint-disable camelcase */
const connectRequest = (data) => {
  const {
    first_name, link, requester, requesterProfilePic
  } = data;
  const theEmail = `
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <style type="text/css" rel="stylesheet" media="all">  
    @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
    body {
      width: 100% !important;
      height: 100%;
      margin: 0;
      -webkit-text-size-adjust: none;
    }
    a {
      color: #3869D4;
    }
    td {
      word-break: break-word;
    }
    .preheader {
      display: none !important;
      visibility: hidden;
      mso-hide: all;
      font-size: 1px;
      line-height: 1px;
      max-height: 0;
      max-width: 0;
      opacity: 0;
      overflow: hidden;
    }    
    body,
    td,
    th {
      font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
    }
    td,
    th {
      font-size: 16px;
    }
    p {
      margin: .4em 0 1.1875em;
      font-size: 16px;
      line-height: 1.625;
    }
    p.sub {
      font-size: 13px;
    }
    .align-right {
      text-align: right;
    }
    .align-left {
      text-align: left;
    }
    .align-center {
      text-align: center;
    }
    .button {
      background-color: #ff8c00;
      border-top: 10px solid #ff8c00;
      border-right: 18px solid #ff8c00;
      border-bottom: 10px solid #ff8c00;
      border-left: 18px solid #ff8c00;
      display: inline-block;
      color: #FFF;
      text-decoration: none;
      border-radius: 3px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
      -webkit-text-size-adjust: none;
      box-sizing: border-box;
    }
    @media only screen and (max-width: 500px) {
      .button {
        width: 100% !important;
        text-align: center !important;
      }
    }
    body {
      background-color: #883e67 !important;
      color: #51545E;
    }
    p {
      color: #51545E;
    }
    .email-wrapper {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      background-color: #F2F4F6;
    }
    .email-content {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-masthead {
      padding: 25px 0;
      text-align: center;
    }
    .email-masthead_logo {
      width: 94px;
    }
    .email-masthead_name {
      font-size: 16px;
      font-weight: bold;
      color: #A8AAAF;
      text-decoration: none;
      text-shadow: 0 1px 0 white;
    }
    .email-body {
      width: 100%;
      margin: 0;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
    }
    .email-body_inner {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      background-color: #FFFFFF;
    }
    .email-footer {
      width: 570px;
      margin: 0 auto;
      padding: 0;
      -premailer-width: 570px;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }
    .email-footer p {
      color: #A8AAAF;
    }
    .body-action {
      width: 100%;
      margin: 30px auto;
      padding: 0;
      -premailer-width: 100%;
      -premailer-cellpadding: 0;
      -premailer-cellspacing: 0;
      text-align: center;
    }
    .body-sub {
      margin-top: 25px;
      padding-top: 25px;
      border-top: 1px solid #EAEAEC;
    }
    .content-cell {
      padding: 45px;
    }
    @media only screen and (max-width: 600px) {
      .email-body_inner,
      .email-footer {
        width: 100% !important;
      }
    }
    @media (prefers-color-scheme: dark) {
      body,
      .email-body,
      .email-body_inner,
      .email-content,
      .email-wrapper,
      .email-masthead,
      .email-footer {
        background-color: #333333 !important;
        color: #FFF !important;
      }
      .email-masthead_name {
        text-shadow: none !important;
      }
    }
    </style>
  </head>
  <body>
    <span class="preheader">Reset your password</span>
    <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center">
          <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td class="email-masthead">
                <p class="f-fallback email-masthead_name">
                  <img src="https://res.cloudinary.com/torsami77/image/upload/v1581169722/logo_r2nlb6.png" alt="Logo">
                </p>
              </td>
            </tr>
            <tr>
              <td class="email-body" width="570" cellpadding="0" cellspacing="0">
                <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td class="content-cell">
                      <div class="f-fallback">
                      <p><strong>Hi, ${first_name}</strong></p>
                        <p>A new connect request awaits your response.</p>
                        <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td align="center">
                              <!-- Border based button
           https://litmus.com/blog/a-guide-to-bulletproof-buttons-in-email-design -->
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td align="center" >
                                    <a href="${link}" class="f-fallback" target="_blank"><img src="
data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMVFhUWFRcVFxcVFxcYFxgYFxcXFxoYGBgYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0dHx0rLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstKy0tLS03K//AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAADAgQFBgABBwj/xAA/EAABAwIEAwUFBwEIAgMAAAABAAIRAyEEEjFBBVFhBhMicYEHMpGhsRQjQmLB0fBSJDNygqKy4fFTkhVjc//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAQEAAgMAAgEEAwEAAAAAAAABAhEDITESQTIEEyJRQnGhM//aAAwDAQACEQMRAD8Ak2tRGtW2tRQ1AlrUsMSg1Ea1EktaiNalNaiBiBDWJYYoztFx6lg6Ye+XOccrGNu57uQ6KnYb2rMzxUw7mtJAlrgSOcjQoh0UMQMXjKVITUqMYPzOA+q5hx72h4mt4cOw0W28ZIz767AaaKjYioSS6o4vfe5M3Jsb/RB3Or2xwDbHEM0mwcRHoE8wXH8JVMU69MmQIzQZOkA6rz4KZiRl0HwQ3TM6Xm2kjkpHpqFmVcQ7Kdva+FcGVCatGYLT7zROrD+ht5LsvBuK0cVTFSi8PadeYMaOGxUBzlWi1GypJaiQsq1lRS1ayoBQtQi5VrKgFlWQiQsIQChYlwsQMmtRWtWmNRWtRDTWojWpTWojWoEtaiBqU1qb8W4jSw1J1aq7Kxoknc8gBuTyQc49rmLY2rhwMwq02ufmGga4gAQdSS3bQLnneCLNHoCBodpsVI9oe0BxeJdVeMrSYYCZDGaZTGx1PUpiyllkyADfXaLQ7YBSG5Ei7g3Xa0b39B8UjLzl3+EiOt9k4pudHiiTtzkb3mbBaqloElovcAG9xMiBzH1QB7yNA1tztNjbfVBe07/GNuaPmj8Mc5PrykXQq0QIBvudwOg9FACTedVN9l+0NXB1hUpaEw9hJhw5HYHkVDMZMnktkkWI/nog9M8I4hTxFFlamZa8T1B0LTyIMhOy1ck9kfHSyu7DvfLKjS4Zjo9vKeYm35QuuygHlWsqMAtFqJBLVrKjFqSQgFlSSEbKtEIA5ViLlWIGbGorWrGtRGtRDGtRGtW2tSw1BgauX+0UVMViK1IT3eCwxruE6vcJEg2MD5SupZDsVTOKj7Hj3YqqP7NiqTaNVwBIY5tgXRo0hBxethiCAIJbAMxHz6mEagwjxRci8l2mu1o0+Cl+1mFoYeu6nSqtqMID2kXgOFmmNwIuNRqq3Xq/lFxrG3RA8r1NZfE31M9NCevyTOpXaLMEdTr6fut4egXscQbtjwjcc+qA+naRpv0KBbpyyd9PLfdLptzMLd2+IeW6CXSAOSd4B/OLRraxgX+voUAsA/xZf6hl1i50k8pQ6wAJGvI6LMTTyuPLUf8ASXi6ocZmZvAEAcwgEw5fEDBm0G469FfOxftFfhqbqddr67RdhzDM3W0uu4T8FQSZRw3KAPJx8kHpbgXFqOKpCrScHDQjdrt2nkQpDKvLuD4tXpEmlWq08xk929zZ88pEp1R7Q4rvM/f1i4uzE9467tJN78kHpghJLVxrsV2txlHFMw1R7qzHvyvDnd44OcBLg+TMHaY1XaYQCIScqMWpOVAGFiLCxA1aERrVjQiNCDGhLAWwEoBBkLmfta7XvpTgaMZnsmq7UtadGgaAkXJ2BXT4Xn3t+yoeI4iqRJ7wtLdYY1oDfQtg+qCnAEn1UnTZDQ2o3TQ9OQjfryWhg2ujI6Oh1B6nyWhhHi3eDQmJMjTaPkgUG1GuEXyzYm4EwWz+y3Xph8PbAJ1BgCYk3O6SGOETDsozQPQ3nXZG4Xhw6RnEuBsLgTz2BUW6TJtF1LG1p57eqc0qUAXbJ06/yU64nhiJMEuzwJucsCPmnFHDtcyajYI2n9vJRbpbHHfSP4mJAd8dNSJuRvr8UwUriagDCYEEljRyi5POdFGQT5KyjdOBedFt8zefInQdfithx0yjXUj99ER+HfqdyBm/nogbuF4Cc0qBNgJOp+Q9Bf5LbWAW6CTqIO46rdSuA3KNDre5PM/sg6X7HeD4d9apVzZqtENgR4RmBlwOjo0+PRdeLV529n/HvsuMoHMQxxLKvIsdoD5Oh0r0WDIkaFAMhJIRiEmEAS1YiELEDVoRGhaaEQBBsJQCwBA4ljG0aNSs/wB2mxzz6AmPXT1QVft32tOGy4XDDvMXWgMaADlDrAnryC4ZWxNUVnF7jmLvGXG5M6uP7KXwfHqve18aGl2Jql3dOLZFPNOd7ZtmaCGt5SmDHPDZquAkk6AuMHWfNAOqWauEHmJE+vUzqgucYs4giDrM+vMIrCKrsoaDOpI05kGbqx//AAtMBuW5BubbbKuWWl8cLl4iMPw2o5jXTBOlombknpcqa4JwjIDmN5Omg6qYoYbQbC4tonrMMTtZc+XLb07MP0+M7qt43hQcZnxDff8A6TdzCNtv5Cs2JwvRRdWhbQKszaXim9q6/AtkmAm9XCwCAp92GlM8RQhXmbHLikV8uLYBEib9QY/ZBrVDy533Kla9NMcXSMLaZbc2WGjAlKZTk/z6IjWibH1Nkt2Jj3LaX3MGfTX6K7MaiwU4c7UiWjcyLW2uvSfYzFOq4DDVHGXGk2TzIEE/JeYBmJ3nquvew/iNTvK1Go9xaWh9NpMtaWnxwDpZzdLWug6yWpJCMQkkKAIhaRIW1IZtSwktCWAg2FVfam9w4ZXyzfIDHIvbPorY0KO7TcN+0YSvRFy+m4CRPiF228wEHnrgeBr1qNV2dzaGHaSTaA50kMbO7j/NJin4Z/4tTt0tf5hPGsq0WvP4A5vhLwCCZghkyfdgmLQEmk4hvePN9RPPwuEW8/kgSzwFzW291szck78onZXjhWHs2RaNxoqhwiiH1Gl0wCYGsBX/AIeyG7nzXPzZOz9PjfUpgsKDZSowUDS2iZcIPNWllIFtpWWM26crpWMXg5EgKExWEV6xGHjyVf4lSF1WzScctqq+gAFHYmmpvEt1UXiW6qYjKdIXEUUHugbFP6jJTd9OFtOnNlDB2EAGn8/ZRFallMFWR+HcRzUCaDnOIi4Jmx2W2Nc+YmC/rgZWwTudYEdTICvHsbovqcSbUOjKVUgcpGWB8VRKtdmkSAfieZ6bK7eyvFmlxGl3gGaqDTYJjK1zXOLo2ktAvrmVmbv5C0QiQkkKAMhaSyFiBiEsJLQlgKRsBLAWmhU/2k9qxhKPdUzFaq0wf/GycpfqPFc5eoPJBzf2i4XCtxtU0oIBL3gZQ0VCAXNbl12JncxzVHxGKJsNNI2MTFukqwYThVXE0MRjNaWHLLO/GXOvc/0ghx3MhVmvE2j0BA+aC0dmZ97zV5wLfCqd2YZ91IVwweKpsHjcAeS4uTvJ6XDqYRK4QGQrZw4eFVjDcVw4Il4A6g/srBQ4vQI8D26KcZozyl8OsY2wlVbiwiD/AD+aKZxXEmka/wA3Vdx+IBKrlktx42ILEqNxJUniqgk3URjcQwbhRjtfPWjR6GQtuxTOaXgsr3AAyt45stLBwnhUtDyLDW2llX+1NbuqbaZFnVHPdBguE+6TtZdU4RSaKeTkL3VQ7Y8LpZ8z2ju2DM6d3ZeXWwt1Wjnvbl+HMS+ATMCRIG5MeoTvhuNfReKrDNfMC06lpDpzT6FMcTSIflEibxynb6J1g6DmuAaC6o/wtDRJk9BfcfNaMXqfg3EWYmhSrs92owPHSRcHqDI9E8hQnYbg5wmBoUHTmayXTs5xLnDoATEKdIQDIWJRC0oEcEtqSEtoUha457c+E1BVpYoCabmik7XwuaXOE7AEOPwK7IFqrQa9pY9rXNcILXAFpB2INig82f8AzgPDaXD6bHZjXfWrO5xGQNg3tJM/0hQNZjG9T00MjedCrd7ReAMwWKqspDwVGtqMGX3RUcfC0iwgtPxCqmLp5W5ZJiJtYGPmgtPZOme5nqf0/dWPhnDWSDU8Tjr0/mijuxlPNQafT4W/RZx2nWa6GAuE6NP1i648rbnZHpYSTjm1m4pg6YZLIt1/5VbBIdIddE43wunRwzapxPePcx3hpUmnLUEZWvDjnYCJueSgeHOqFoeXtcCYyz4tBcA7XVrhdeqY8mNvi28PxTgIJWYrEI3C+GPc0HrCBx/BGmfMLHXbo+XSCxVYkm6ZfZC43TljQA+o7Rv8un3C+DVq9OpiJY2lTEucahaGgG/gYDUdGugETqtsJfphnljPUWeFN3JWsHgnMqNcw6EFM6BrVHPLILW5jOcizTr4ufVSXZ3iDM4c9wLYMgghwOx0giVf45RlcsL46th4FNr93C/mAqb7Tab3UvA0uc5zR4ZJtJ0CLw/tMajm04sDAUp2hENa7kQRJMSJAt81bbOxxeq40yQ8HOdcwu0zvOpsF0X2HinUxji5oLm0nOaXEEtMtaSPMEqkcer0oLA2XyHGofxEm/orR7Fq2TiFITHeCq2OYawmOlxPory9M8sddPQ0LRCWtEKygZCxKhYgiwltSQltQLCWEkJbUHn7t62vjOJ12UmFzmOdAFiKdAAE3MbE+qpmKuCYIAA1t69SVfsERR49iRW/EcZFhfvGVHtFxu1wvzVGqsiiZgl2W8yT5cv+EHQewVP+yU/N/wDvcre3g4Izb/z1VR9nLx9lZ0c8f6p/VdJ4e6RdcGf516vH/wCc/wBKrxDh9Uy2x83OH6T8034d2admBcWgflkn/wBjorjjaI2TJ+KpsF3AKZafGN02BsBggBVjte8l2t4AVir4gRLdFT+0mJzPvqqfa+ukZw1skt8j6gyFJ4sVsv8AdsdqJgAqHwtXxdQrjgrtlXuVikxlihv4a6TFEifgsOHeGlpAA8v1V8xkAaKu44XUzkqt4oj+B0CKjfNW/tyCMHmEyC0el/0UPwCiO8ClPaJjclBlMCXPJaB0LSCfg75rWeMM5quUceIJY8bi/p/2p32V1g3imDP56jbT+Ok9o+qgON4c08tNx8YLi6NrxHyKJ2XxTqeKw9RsyzEUjYwSMw8IPUSPVbYeOfkv8q9bLRSyElWZkrFtYgiQltSGogQLalhICI1Bzn2m9gG4kuxtOoKdRjCagIJa9rGkz4bh0W6rjFUgMEgQHCWjVzZnxHVtrL1HxlpOHrAamjUibfgdvsvLVQ+B4uN4FyepJ/Ag6tguGswtSpSpgimXmow/hyVPE0NO8CB8FZ+GYgATKpTOOuP2PDOAk4OnWc6IM5QxrYjTK2ettN5SlWOxXDzTWe3p/pr8uOT+k3xfiUA3H85KqYHNWrBz57thlxT9uHNUxNtyp+jh6dOnla0EHXqok+60t+oRg8bhA6CS7LqARY9RKrPaipSqOc4WCkqPZ6ixz3saGl0kx/yqxxrg5M/eEt5JMUbRFegMpcx4McjOnNWnsvxHPTE+qprOHhs6wdQDb4Ka4Y/uxbRXyimFu1mx9YFQWIKLUxrSEyqPkrPGNcsonOB0oc0jffyTnimCGJxVJrn5RTIcdL5i/wANyNqY56oXCauwUF2l7Qdwaz8uZz3mnSmCPu6bWuc4cg55tuunGOHkvakdq4GMxADszW1XtB5gOKb8GP3jLAk1acA2B8Y32TOrULiXEkkkkk6km5KkezbZxeGFr4ilrpeo0X6Ldy2vXq0UorSBK0tlYgiWpYSGogQLCW1ICWEDfitYMoVXnRtJ7j6NJXlt7s2ZoLjLdCAHE+egaF3n2tcUqUMDFMgd6/unE65HA5o62C4VYnKTP4YuM0QQwconX8ykJwfE3NxFGs5xMBjDNiGNApgWEHwiy6lSNlxcm/Pb/roukdkeLd5RDSfFT8J8tj8PoVzc+O5t1/pc9X4rPSq5AXE2UeO0rHOLWnMQYibDzT0gPblOh18kTAUKdMmABI/h67rOeOuT+RLeJeC8RyGafqq7j+IEyAPCL3n91bMVgKdRpMtnluot3BaQp3nU7nnF/h81O42/Z/pTXYoTeyLhcY0mARPJax+Dptda/rKbYOkGmQFbqxy54/G+n7nXSxUSCi02XVUbWHgzw1pqH8ILvgFybEZ6neV3Cznm8/jd4oHOB+i6HxXjbcLhn5XffvHd02iJbmkPqHkA2QOrui5mahjLJgGY2nSY52HwW/HOnHzXd00xhJAAkkwAOZ2XRqXCms45gsICwmh9npvMGHVKbe8fIO8yPQdU49iHZplWu/HViO6wtwCJBeWk5j0aPF5kck99ktB+N4xiOIODS1hqVJIjxVszWZRzDZ/hWjJ3UrRW1ookkrFshYgiWpYSGpbUQWERICWEHKfbbxIE4fDAS4F1V0agEFrYP/vPpzXKar4mSJJAkjwkCDlJ1BHzVk9oXFPtHEcQ8kltImkzlFOxEc8wJ9VWK4IbIcCCdI8JhsT1cDPwQRbjdSHB+IGhVDxpo4cxb5qPRo93TTz569VFm4mXV3HWMLiMwEHy+qfubnF9emyg8Awmmxzdcotzsp3hmJB18o3XF5XqS7RmMZWYfCQR1Ci8Vi6+kwPVXipkjRRmKotJmFbabln5tS3UXbrGMhS+Pa0EwmFCnJUy7ZZespsThrg259E3xeMaywueX7pjh6xc+SVaRS3SN7bj79vWk0/Mp/7P+xTsc59WoS3C0QXVXggEkNLgxk76TyBQO3TPvWSDJpNynQWc6Z+SvTu1OGw/Dm8HwAOIxFVpove3w0+9rAhzmud717DQRF7Lox8cWXo2C4kzAcDp0KTXHF8QD302Mu4d5DQ4xeAyI5kDqr97MuzLsBgW0nx3r3GpUggw4wA2RrDWtHnKH2G7FDCNZWxDjWxmQMNRxnu2ZQ0UqfJoFvjsrgpQ0tFbWkSSsWysQRLUtqGCleaIbdXaNSPr9Ey4vx2lh6NSs8kBjC7RwmBYCRunvfNbAJDeU22n6AriftN7auxT3Yeg5ww7SGk3iq6ZJ6tgW5zKCj1K7nAvdOaq/MT73vO1gDX1lBxbzkuSZvcWu4m39J5jdKe2MsiwLn2kWAERfyQMcII00Hukwban817oGad0mmGH82Wxg3H9SalPPwsn+oRI+Ph3QdI7PVJos/wj6J/VoGczTB+qhey9T7lsHQuba2jiNNlPtqc1w5+vV4+8YZ1sc4CCCD8vimjsc47p9iGf9qGxeG6hRNJuw8TV3cYTLEY4xDLDnv8A8JNXDoXcrWaZXdNHBO8APEElzQENlSCrRnlE/wBoqDK1FhMZmAn0lo/UofZbtqML3FKpQYaNGr3h7tobVecrw3O42flLy4TFwLqLxWNOQ/m8I8hc/Mj4KDeyStN6YXHb03wHtxgMWPu64a7+ir927/VZ3oSrE1wIkGfJeRmUypjh3HcTQh1GtUYR/S45fVuhT9w/aeoVi572F7fPxFGcQ0S0lpc0bgA6bzIV7wuNp1BLHh319RqFeZSqXDKeilYtlYpVRDGlLqAiIuiwoHtVx37LQqPa3PUaxzg0mAAPxvOzRp1MALO5V0Tjk9Vr2kcdc+ozh2HGZ9QA1TeGN1a0xudSJ0AGhXKO0WBFDEGgCfu2jOdHF7rmY1Isf8q6/wBieD93TONryatRpqvc8XuJJvp+gtsuLcUxRrVKtY+9iKrnjXRzibeQj4qcVeXqAVXCJtGURt+YgHYxlTTECXD3dBdu9hr16ouI9wnmRptew+AQ65PhN/7sajYW+FldgbNEujmU8d7jDf3xprqd9j0TbBtl4/WP1Rsv3YNz4piNgdiPNBcOxlaW1GXlryQDrB5qySqP2aqFtcwfe6zvz3V/NLn8dlxcv5PT4O8IBUcmWJg7BPqtAphWYVnG1iNqtTWoFIPpILsOtJWdiLqIDKTi4NaJJMDzUhWpQiUKBZTNXRzpZT5/nePIeH/MVpKxyiKxIBdDbtb4Qecan1Mn1WqdBP24UAJbaSXJEwNmUFt+HsnjWKydkuBGs8VHj7phm4MOcNG+U6qm2nxS3Z7hPc4VrCIc7xuHV23oIClWsc1gcCZFjfUKU7gm8JbsPYiNVeJoeH4niGtzMqEjSH+KPjf5rFqlQLZGyxW3WXwx/pJ4zHO7/uqZA2c8iQ3o0fid8hvOihO2PCz9lr06QJMNquMy+p3bg85idZyxyi0BSfHqQpVaLhpOX+fFS1ZoLifypvtNnSldveOsbwmaZviGtpM6BwlzrXswOXD8U0l1hEADnd9h5xdW/wBoVc06zcJI7rDAuYBt3viy33aBlHMKptrF5BIiADyFm5W+V5K1xmo5eS7prjPea3YR8NjJ1EX9UCuZawzs4a9eWyI51nvP4hlbtqenkfglY8GGN5CP4d1Zk1w+mcwOkmBfyPnvsjCRTIAj3x70zBadOiFREED8w/2+acUwQXjm5400u28befoiUtwGnNRro0JabRyOm3vLqWBLS39P+FznsfDnPBiQ5rh5GWGJ6kLodKnZcPN+T0uD8Sq+Cb+Ex9Pgo6pgDzCkhPmtOWcbIapgOoQKvD+amnNkpLqM2gk9Ap7NRWfsGdwaLTbyG5PQCT6JGJph7vCIY0BrB0G/mTJ9VaBweqW+ClUJfYkNdZgN9oBdp5A80l3AqzRJo1AB+Q/zZX70z1LVY+yJDsIrxg+yNepBIFMc36+jRf6Ky8L7MYeicxHePH4n6DyboPPVJLU24xQuz/Y59Yh9UFlLW9nPHQbDqr/RwbWAMYAGNEAARZSQZN+Sa0ruK0k0zuTbaKIKCMG3RckBWV2ZDDrE7oU1ilCN7ZslrDycCnPDq+anPoeiR2kuI6KJNc08HiHAwW0qhB65Sn2n/BwjtHj+/wARVrbVaxdrYMLob/pA+aj67/C7mTbyH6a/JSGBwBfTrVPw0mhx87AfUJjVZ7gkTb6SbH1W0cVn/QXCA1vUmdpHhmSkYkzUgbCNZ0HNGpECCfw3PqSTcaTEIFC8uO568nH9FKhxWYQ5ulzm1AtYai43UrwSi01iSDoXCx3E7WO3wQKNKS92optgTcBz7731nVG4XWDXOc6fccJFxIaPD9TdVvjTGdx0L2d4CjUova+m0lzZkiH84zeY+N10jhuCoHwmmzO38URnaRZ0D4HqCqR7MqEN2gNaPkDyH6q/0Gw5nTM0/Ig/zmsb67PqNt4Rh5vSbN/5Cd/Y6bRZjQLEw0fzl8FtxtyN4P6pDnTA633Ij+fNJJFbutUGMkkNAMm8DmRr6LYeAHdCfkkvIggaSZ6nf6/VBYSXFuwcSevIfr8EDqmfDJ1N/im7Xtew5dNDEX+CNiHw0+R+iBgR936nWT9XH6qUfY0klIxGkBGYICBEmUTsipZqa4Fm6PijZawzbKFvoVouiVNISG6ojWyQpVEpMgLFrGPytWITaK4tclVLt9X7rhVaNahZSPk94zf6QR6q64lmvNc+9rpjAspiZdWaSByDH6+t/SUx9M7/AB0qXDeHAcKe90Dvi6p5im0lovzqGmPVUxrfGCTEybcyxp/UrpHE8MKmDwOHbAPdMznkajhfzDaNZ3oFS61EGpVJ8MCpUbzDTGQHrBAK0xYZxCYpwDTGpieUNkAjol0KAgAcib7eGPrPwTWoZIaLWA+A1+p9VMYWDTc6NQ34kj91ZlJ2NhqX9nqVP6qwZvozxTHw+ax2HexlFlT3a/d12jpmqU7k6Eh3zHJCdW/shbeZJaOQJJcT08QHwThxq1zhCYDGkUGXuRTOZxjWJdHmqtJHY/Z437t55ka66Dm4n4wrZQnvHHaQW+sSoPsdgQyiRqLaaacw1oPorENWn0WTqogM23H8jztfohsk7+u5vMD8u0pWWbbDWPoP1RKn4Y/qjW38siuwy3X4H9vIfNBwTTL3TMvd8jARnuzC3lf+bLWCgg/43/7yifoWs3wnyP08ik4Fv3Y11Oojf/CPok8QEscAcsiJBgjqCQRPolYMAUmgEm0ySCTJJ1GuqtFPtuo7ZIqBFDN0KsoTDSqJKK3RAe66cMbZQsUAnWHam7G3TxggK0VqJ4/WhsbkrFD9rsXlWLPK9t8Mek7jNVz/ANpn90PLEO9RSLR8iR6rFi0x9Y5fiqWBee7w5/8AvI9G4eqGjyGY/FRGIMV6sf8Agd8qcj5tHwWLFaMsvFRpj3vJyk8C77k/5fkQsWK9YxI4doNGuDsymB5GrTTjgDAa1Gfw5MvTM45visWKv02x/J3Xs0IYQPy/Q6ndSVaxZG7wsWLOtjpmyS4DvBYfj26D9lixQrTWlZw6j6AQnGF0f/8Ao/8A3FbWJFqXUaCL8x036IjmwAPqSfmVtYrKX0hybV1ixKkybqnTFixVWpzQR3aLFitFa5324cc8df0CxYsWV9dWPj//2Q==
" /></a></br><br/>
<strong>${requester}</strong>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
<table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                            <td align="center">
                              <!-- Border based button
           https://litmus.com/blog/a-guide-to-bulletproof-buttons-in-email-design -->
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                <tr>
                                  <td align="center" >
                                    <a href="${link}" class="f-fallback button" target="_blank"><font color="white">Review request</font></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <p>Please <a href="mailto:hello@dearmac.com">con<html>
                        <head>
                          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                            <style type="text/css" rel="stylesheet" media="all">  
                          @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
                          body {
                            width: 100% !important;
                            height: 100%;
                            margin: 0;
                            -webkit-text-size-adjust: none;
                          }
                          a {
                            color: #3869D4;
                          }
                          td {
                            word-break: break-word;
                          }
                          .preheader {
                            display: none !important;
                            visibility: hidden;
                            mso-hide: all;
                            font-size: 1px;
                            line-height: 1px;
                            max-height: 0;
                            max-width: 0;
                            opacity: 0;
                            overflow: hidden;
                          }    
                          body,
                          td,
                          th {
                            font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
                          }
                          td,
                          th {
                            font-size: 16px;
                          }
                          p {
                            margin: .4em 0 1.1875em;
                            font-size: 16px;
                            line-height: 1.625;
                          }
                          p.sub {
                            font-size: 13px;
                          }
                          .align-right {
                            text-align: right;
                          }
                          .align-left {
                            text-align: left;
                          }
                          .align-center {
                            text-align: center;
                          }
                          .button {
                            background-color: #ff8c00;
                            border-top: 10px solid #ff8c00;
                            border-right: 18px solid #ff8c00;
                            border-bottom: 10px solid #ff8c00;
                            border-left: 18px solid #ff8c00;
                            display: inline-block;
                            color: #FFF;
                            text-decoration: none;
                            border-radius: 3px;
                            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
                            -webkit-text-size-adjust: none;
                            box-sizing: border-box;
                          }
                          @media only screen and (max-width: 500px) {
                            .button {
                              width: 100% !important;
                              text-align: center !important;
                            }
                          }
                          body {
                            background-color: #883e67 !important;
                            color: #51545E;
                          }
                          p {
                            color: #51545E;
                          }
                          .email-wrapper {
                            width: 100%;
                            margin: 0;
                            padding: 0;
                            -premailer-width: 100%;
                            -premailer-cellpadding: 0;
                            -premailer-cellspacing: 0;
                            background-color: #F2F4F6;
                          }
                          .email-content {
                            width: 100%;
                            margin: 0;
                            padding: 0;
                            -premailer-width: 100%;
                            -premailer-cellpadding: 0;
                            -premailer-cellspacing: 0;
                          }
                          .email-masthead {
                            padding: 25px 0;
                            text-align: center;
                          }
                          .email-masthead_logo {
                            width: 94px;
                          }
                          .email-masthead_name {
                            font-size: 16px;
                            font-weight: bold;
                            color: #A8AAAF;
                            text-decoration: none;
                            text-shadow: 0 1px 0 white;
                          }
                          .email-body {
                            width: 100%;
                            margin: 0;
                            padding: 0;
                            -premailer-width: 100%;
                            -premailer-cellpadding: 0;
                            -premailer-cellspacing: 0;
                          }
                          .email-body_inner {
                            width: 570px;
                            margin: 0 auto;
                            padding: 0;
                            -premailer-width: 570px;
                            -premailer-cellpadding: 0;
                            -premailer-cellspacing: 0;
                            background-color: #FFFFFF;
                          }
                          .email-footer {
                            width: 570px;
                            margin: 0 auto;
                            padding: 0;
                            -premailer-width: 570px;
                            -premailer-cellpadding: 0;
                            -premailer-cellspacing: 0;
                            text-align: center;
                          }
                          .email-footer p {
                            color: #A8AAAF;
                          }
                          .body-action {
                            width: 100%;
                            margin: 30px auto;
                            padding: 0;
                            -premailer-width: 100%;
                            -premailer-cellpadding: 0;
                            -premailer-cellspacing: 0;
                            text-align: center;
                          }
                          .body-sub {
                            margin-top: 25px;
                            padding-top: 25px;
                            border-top: 1px solid #EAEAEC;
                          }
                          .content-cell {
                            padding: 45px;
                          }
                          @media only screen and (max-width: 600px) {
                            .email-body_inner,
                            .email-footer {
                              width: 100% !important;
                            }
                          }
                          @media (prefers-color-scheme: dark) {
                            body,
                            .email-body,
                            .email-body_inner,
                            .email-content,
                            .email-wrapper,
                            .email-masthead,
                            .email-footer {
                              background-color: #333333 !important;
                              color: #FFF !important;
                            }
                            .email-masthead_name {
                              text-shadow: none !important;
                            }
                          }
                          </style>
                        </head>
                        <body>
                          <span class="preheader">Reset your password</span>
                          <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td align="center">
                                <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                  <tr>
                                    <td class="email-masthead">
                                      <p class="f-fallback email-masthead_name">
                                        <img src="https://res.cloudinary.com/torsami77/image/upload/v1581169722/logo_r2nlb6.png" alt="Logo">
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="email-body" width="570" cellpadding="0" cellspacing="0">
                                      <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                          <td class="content-cell">
                                            <div class="f-fallback">
                                            <p><strong>Hi, ${first_name}</strong></p>
                                              <p>A new connect request awaits your response.</p>
                                              <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                  <td align="center">
                                                    <!-- Border based button
                                 https://litmus.com/blog/a-guide-to-bulletproof-buttons-in-email-design -->
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                      <tr>
                                                        <td align="center" >
                                                          <a href="${link}" class="f-fallback" target="_blank"><img src="${requesterProfilePic}" /></a></br><br/>
                      <strong>${requester}</strong>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                      <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                  <td align="center">
                                                    <!-- Border based button
                                 https://litmus.com/blog/a-guide-to-bulletproof-buttons-in-email-design -->
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                      <tr>
                                                        <td align="center" >
                                                          <a href="${link}" class="f-fallback button" target="_blank"><font color="white">Review request</font></a>
                                                        </td>
                                                      </tr>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                              <p>Please <a href="mailto:hello@dearmac.com">contact support</a> if you have questions.</p>
                                              <p>Thanks,
                                                <br>DearMac Team</p>
                                              <table class="body-sub" role="presentation">
                                                <tr>
                                                  <td>
                                                    <p class="f-fallback sub">If you’re having trouble with the button above, copy and paste the URL below into your web browser.</p>
                                                    <p class="f-fallback sub">
                      <a href="${link}" >${link}</a>
                                                    </p>
                                                  </td>
                                                </tr>
                                              </table>
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                          <td class="content-cell" align="center">
                                            <p class="f-fallback sub align-center">&copy; 2020 DearMac. All rights reserved.</p>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </body>
                      </html>tact support</a> if you have questions.</p>
                        <p>Thanks,
                          <br>DearMac Team</p>
                        <table class="body-sub" role="presentation">
                          <tr>
                            <td>
                              <p class="f-fallback sub">If you’re having trouble with the button above, copy and paste the URL below into your web browser.</p>
                              <p class="f-fallback sub">
<a href="${link}" >${link}</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td class="content-cell" align="center">
                      <p class="f-fallback sub align-center">&copy; 2020 DearMac. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
    `;
  return theEmail;
};

export default connectRequest;
