import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import aboutus from "../assets/Aboutus.png";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Mariano Divao",
      role: "CEO",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Zayn malik",
      role: "Developer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zayn_Wiki_%28cropped%29.jpg/220px-Zayn_Wiki_%28cropped%29.jpg",
    },
    {
      name: "Haouri Saad",
      role: "Developer",
      image:
        "https://fr.web.img4.acsta.net/pictures/19/05/09/23/26/2528783.jpg",
    },
    {
      name: "Maluma baby",
      role: "Developer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/71/Maluma_-_Cuatro_Babys_-_Festival_de_Vi%C3%B1a_del_Mar_2017.jpg",
    },
    {
      name: "CR7",
      role: "Developer",
      image:
        "https://www.parismatch.com/lmnr/var/pm/public/media/image/Cristiano-Ronaldo_0.jpg?VersionId=WhRa8btJ5rQjhK1eZLlCPLM8ufuNb7HF",
    },
    {
      name: "leo Messi ",
      role: "Developer",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVEhgVFRUYGBgYGBgYGhgZGBgYGhoZGRoZGhgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCwxNjQ0NDQ3NDQ0NDQ0NDQ2NjQ2NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0MTQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEIQAAIBAgQCBwQHBQcFAQAAAAECAAMRBBIhMQVBBiJRYXGBkRMyobEHFFJywdHwQmJzsuEVMzSCkqLxIyRDg8JT/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAECAwQFBgf/xAAzEQACAgEDAgQEBAUFAAAAAAAAAQIRAwQhMRJBBTJRcRMiYZEGFDM0UoGhsfAjNcHC0f/aAAwDAQACEQMRAD8A8chEhJgLCJCACxIsIAEIkWABCEIAEIRSptext2209YCEj0pk3sL2F7d0fToktlFyTaxAJGu1+4zruBdDsQXQ1aA9mSDnzroLbghvDQ6RN0NKzkGpMACQbEXBtuBv6Rk9pfobRNNkzFgesNRnQkW09d7dxvOKqfR7iDUK0yrJc5XJtccrjke3witA1RxcW09Kwn0UVTbPVUeAJmzh/oqoqOu7t6CPq9ERtHjkSe0V/o9w6jqp5kkzmeMdC1UEoLQt+gdSPPYku4/h7UzYiUoxhCEIAJCEIAEIQgAQhCACQhCAwiwhAAhCEACELQgAS3wzh9TEVBTprmY8pLwnAVa7hKVJqjXF8qlyo7TqAB428Z7R0R6ILhQWJX2zKQXAAYDTqqFJC7b3JkZSoaVnCUPopxzD38Mvc1Rrj/ShnZ8J+jtFX/u2p1mC5CV9ovUtoC2YEsOTHuHISDjPS98O5FRCVRsjqT/1EJF0dW2ZWBuL3GhHIzQ4d0rp1qQxAOiOKNTldWAKsV7BfXwbwMHKRLpRpcM6N4fC2NEKCdMzDO530znxmlVxDqL2Vl5297xK2nI4jiQw2MFNnZqVRMwzbgFt7/u6679U3veLw7pWpxDYWv1XDmmr/ss3/jNz9oaeI8Lx3JHQ5KVSoCHdG3sCLMD2gjv3EuYfChSSrBj36HwacjXxqCoBYhgdha1ySpBB2Vmut+RZb73ja/FXp10LNa91zDTrIxtdTvdSotzN+yJNoGk0ehYaoD5XB8paZAROep8RFSmalPRhdWFr2I1t36G47jNjDYtXUFSMtu/9CXqVlEo0JXpCYnEcKCDpN+s0x8fUsDGiDPMOlXDRYm084rJZiJ6X0vx4AIvPNKr3JMGSjwMiRTEgSCEIQGJCEICCEIQASLEEIhiwiRYAEIQjAJNhMO1R1RfeY2G/mTbkBrIZ03RLC0cxfE1VSlb+7zAGpY6KwuCEv2kAmJgeodEeDJgqAvVDFxcjKApYnTrEAldgNrne+05rE9MquGxbs6M6XsVLEiwOpRgMqn47bTX6ZYpzhFam2VWy2UKBkQj9sg2C8uYPnPK69c5jUYl8pCgnYsQTqBuoAvbvA20laJvZHoXT3GUcVhqeIW4DoQlW2ikHWlWA2N72PI5twTPPOF8SeiKia5ai2YdhW7Kw7wdZe4V0kdFam1mpva62WwO1wAANtLdy9mtLFBczBQtiCVtsb3AK+VxY2IPabmNKthN2a+M6QHE0ER9KlMWVj+0AOsL8rgKfEH7Uxq2MZ+uxJZVHW5kqbKb9tsvpM43H5yf2pCkfaBPrYgj9co0gs6fHcdcuKp1D00Zx25gi1APEh/Ox5STjPGTUwtN813RyjN9pkHVfxKAfGcqcQSmX90Dnydm/+vhEetdCvK6tbvChSfnFSDqPQOgvSZvbtQdre1UZCbWDgk5fDUix7T2zqG6WLROV1I6xGhtZgbFSDsb+oInjHtyGDroy5Wv+9pf46zZ45xH24FUaPZWYdpUZGPjcK3n3RNBZ7dS6S0nAs26Zl7x+em04/jXTNGJSl1iLktsqgGzMSeQvOI4DiiXVjWZW93JlzZgLaC7AcxvO24zwym+FetTQU3JU1AwJL2OhFiMzXtZbgAkHe0sUkuSMoJ7nmPFOKPWYljp2SheSYlgWNgAOQHKRRtiWwsSEIDCEIkACEIQEEIQgMSEIRAEIRYAEIkIwFnUdD6eZrsKdOmpAas2YPc/sUyD1nP2RbTfScvJ8NXZWUg+6cwvsp0u1u3QegiaBHo/Svi5ovdOtnFmRusuUaWJ5kCw0FtbWIJnIVVR6QcUWpKWJB1ZGawByDMG5bC48NpPh8JUxL52B9jRtncgakC5TXQsddNlufO3g+HPinNWocqEWA+ygNkRfsjQ7anXmbmu0i2nI5GoBey69/bFXWwJnf4novTanZEUEbk3zHl5a9syavRGoHHVLKbarrpDqQ/hyOYNInQ7xCuwPh/SdtgOigLFHvblpbTznR4Hoxh095M3jE5oksMmeXUsKSf1+t7TTocCc65TsNPnPVsNwPDCxWkt+2alHh6DZQJFzvgsWFLk8QxfCHVbkWtuZjE62vPeeN8HR6LgAC4Ownii4O1Qq2gBPwNrfOSjK+SrJCqo0OjWEZqi8tdDbNY+G207XF8bRUanX1D0ypC2bTna+45gd845caaK2S1s1iRztco/rqJj8QrMzi7E6embcSaVlb2RBXHWOpOu5Fie+15FCEmViwiQgMIQhAQQhCABCEIAJCEWIYkWEIwCJFhAAlrAYdXbrtlRdWbsXu7STYASrCAHb1cfnoiml1o5R7OkNAAbZmqNu7E9um/n1eGwtqSIlr5dT5an8BOK6OoKgTuAU91iQPwnpuGw4AHcLTPNU9jXi4sTABaai4v48/GPxJG66AxyUVY5WNhfcflJsRh1UAD9CRd0WquozGYywG0isLHaSAXG0rbLUWuHpfy/X4TVRRymdglKjxl5fH9CWR4K5cjqiKQb7TxjpLhAmMqZBoxOnjbX4z2Oq+k4Pj3By9YvbeCkrK5R2PNcRhn77bCVMYtmHeqn4W/CejvwlAguLaE7fAzgeNLasy/ZFvmfxl0XZmnGkZ8IsSWFQQhCABCEIDCEIQEEIQgA7LDLJcsXLETogtEtJikMkYqIrQtJckQrAKI7TV6N8LXE4lKDVPZh83Wtm1ClgALjUkWmYRHUahVgykhlIYEbgjUH1iBc7nddHOH/V8W1FjmW91JFiRfKQRyIOXnzE71KiILuwA7yB85m0KGYqXADEhg3O4bmfKZXTmysMxIAWwsSO0zPfVubXHo2R0z8YotojrfxA1lWpxbKOudttb+k8cq40g9Ut5mSLxWpbVjbxMm47FayJHq/9sKSO+/wktPjCZrHnPPuDYl3It1rfjJeL+0RrtdeYMqaot69rPWkxG1mFiOZtFHEaY0Z0HmPntPEcT0lqlcmYkDY3i4SriXQ1Ajsmt2AuB23/ADk+nYg8iuj3fMrC4YHwIkOIpgqb+N+c896J8ROcLmYMN0YAelt56PR6y+Mre5Z2OdxVC40FzqT5A7SjwHgyYda2JZMzsGIBA0HJe4bX7Z0XsQgZm32F++S4c0mpsmdGzrbqsDYkc7d8HJ8IcIrlo8M6VYMU8S2UAJUC1UA0ADjrADkAwYW7pjTrentLJUo0z7y02B8DUfKPgZymWaYNuKbMmaKjkaXFjYkeViWkykbFtHBYZYBQyEfliFYANhHWhAC5lgEkqiOyyJbRAyQyyxlgEgFFa0ayS0acYyQFRVKRoS5AHMgeuksFY0LreMVHqVDivtMSmHA0DgnTXqDkezT4y70k4X9Y8ZlYLDLeni10uqM9tQS2hC9mt/SdWao33mZbbG6dPdHnHGujK06YGQ7+8u9+w73nOPhRoiq2/PSev8R4moQ9UX25Tn+GYRXqB2UaaqLWF+2T6inovsP6G8CFGm7sDc5TryJI09J1PHOj9LE01VgfdB032EVEtTt2uvyM26aba7C0i1ZZVRo8T4z0TFGrlAdlOxuPQG06fothnVVQJkQcuZ+8ees7fiNJKgKuLHkw7Zm4Umm1tx2iJy+oRglukXf7HQkOEUEG97Dn4TQQZdJCmOuNNIrVOcTpcDSk+SHF0RUujX1RvLTcd9rzjMfwY4d0Sk7Nm20APnadDV4kBWAzAEnKLmwJt2+M0qOFX2edipbct2AX0B5ASuuplsJdO7PJvpDUnFU82rewQN43b85yZSdR0kr+3xLuNr5V+6oyj5X85hvRtNsVSSMOR9UmyiUiZZZdI0pJFdEISLlkypHFIgorFIhSWMkQrGFFbJCWMsSAUWlWBEmyxtpAsGqIpj7RpEYhsawjorwAgKxCkkAjisLFR0XB+PBcE+GYdYMHpt3XuVHff5zoaHFM1IWJuAPTt9bzztRYzZ4Tij7t7WzHyFzb5ynIqdl8JbUdGcRc66xmGxTtWWmhALGwJ2AGpJ8AI3DJnXTcfr85QHDXequ9gb32kS2z0evWVEVSf2vwE0DUAp6sBtzt8Z5VxR3psMlVnynZiSfC/OW8RjaWJprTr1KygbhSqqzfvC1yo8Y2wtcHX8bxORVcMCpNjY31OxkeHxGYXmdwnhNEYc06TsynXrNtfaw5S5w/CsnVPKVS5LEaGe2ojcRisqd52jqqhV1mFxbFDITfny7La+o19ZFuguzCxfFf+qrOA4VtVI7AN+W9vSS4/pGz0zSprkVtG1ubdg7BMCtUuW1uCxY9uvafK/nEDTThiumzNOb3SFKyvUST3kby8pZSdJEElhowiIQxUgwjxEIgMiIiFY4iIBABmWEfaEAot2kbSRpC8Q2LmiExogYCGsYFoxzEUwCxwksiWSpExocB3X9YruQwcAAaCyiwjhLnDcJ7SoEP7Vx/tJkJK0SjyX+jePN9TvpvyAN/iZo4/HlqmVDlAtcabna52nOYdGoVSri2TUhtO/z5eMr8VxZOqkjNqfPW0pSbdFjlSNDE49A5FyCqm5/ezC3p8ZXw1cFV26z5e/Ub+vzlLD8PV1zOzC97m99b9/lJsPwVSwvU07R+Un0qhRUpbo1KGJdSSj8tRf0+HznV8B4yWsH8L77f0nOHgNAIAly1vevzv2Dl+UqcNqNSqZWbwv4Xt8JXKPoy22nTO54/jQVGVuY9P1acvjuIZgTc6W/zbWv5FpJjcaDYk2tcbeGtu615lUE9qyUhqWcrftBK7eVzKWm2ScvQbjaBSnSZt6iF/BcxC/AX85AjzounqZalJFGiUgNBoBmIA/2zlQ03wVRRln5mWs0YzSG8USdkSNhrGxzRpMYhICIYLAQ1xEWSkRAsQxloSbLCAEzCROslY6xGEY2VrQKyUrAJIsEinUWRXl6okqusLItArSVDK6iWAMq5m25d57o4wcnSE5KKtklSsqgEm19uc7boTwm9FsY4IButIG125M9uQ3A8+6efJR9pUQM2UM6qTyVSQCfIGe2BVp0UooOqi5QOwARZo9GxPA3N2ed9L8PZw6j3jY6dgNj63nJsGbX9ac53/STDZ6dr210Oul9LnusTOGdchym+t7jS9gefp8pREtzKpFrhWKPWUE2IsO7n+Al6gwD6hdLcvG/wMjpYamiqxbVwTlPIH3b9mmshNVQ9zte1h9n9fKKTvgjHbk6FqDomcsCCL2585z2Ic57jXe3lYzQq4guMpOUWGt+ZC7eo07plu1iy7lRqdORsTfs0kYkpNdifFYkG2vPXU6g2/Ies0+hlEvjADtTzP22Ngqnv94ek5lnuRztv37z0noPgMmdzqHWnY/5AzWPi1vKScaCL6mZXTSv/AN6VB1REHrmP4zH+uEe8qsO9Rp6TR6f0hTxVKoP/AC0yrfeViAfQr6TKRc1x2j9fhPQaFxy4VFrjY5GrThlb9Rxq02GgCnzt8PykZTsF/Aymya7wDESTxY3ykVqc1w2Sst/6xvszHLWPjHrUH/EqlpMcvK6LI6mceVZXtHosnapfcX8d/WIqKdmt3H85lyaSceN0aYamMudiK0UiOdCN/wBeBjbzK1Ro5CEWEBkjiOURrGAMYC5YtoqyYJK2ySRXdJUqU5rinfQCApIv7zfAfmZdhwyyOkU5sscatsxxSAIzX13AFyB266CWeJIGCldlFh939fjM/iWKNyBz3MTA4o5cp5bflOjgWKEnj7tcmKbnNKf9CSoVtYzoOC9LGGWnVJOUgK/cOTfnOUr6HukDTLqo9XytbovwScN0epcUceR1B5WOxnGcSwd7t5ep+EucB4pnpexc9dB1Cea9niPlaJiXtpOd0uLpnScozjZgYrElnueWlvW5ty5aSFqxPxl3E0A2vOUfq8lsZ5JpkqVmJGpvv56AfIRC5zHWx2+P9Ii0ze80eE4Y+0U2vqN4Ak2aXR7o89Zb7A6X7u0Ceo8NwYRAi3yrsDyHZKfDKapT000E2MOPSVvdmmMelHnP0oNeth0tspN/Fh+UyzRGYldLbj0mp0wrrWx65dVpKAT+8dbeWhlFtr91pfi1E8Ek4nT0nhuLU4pfFVpvb12+plYmiQ5005SIMJqVDcAcxIalMEXIF5rj4kn5l9jFm/DtP/Tnt9SiREl16ItcWEqDsIt3zdpc0M9qOz9GcjW+HZdLTlun3QmaOU3jMuuskROU2fBmjnNobcrtqOY5RQw5SXLI3pcxMefTKStcluHUOLrsF4sisewQmH8rk9Db+Zh6lkxAJMyxLTLZooEEt00JBNtBueQ84yjSJIJuF7bfKRY2pbqqTY6zRg0ryby2RRm1Kx/LHdkr4u65V0HbzPeZBiKmRLczI8KPhKmPq3M6/wAsIfKqOXvOfzOzOri95DS0JEsNIwnWnPlG5dRti9qJQwOhld0ynulk0vWP+rnQMPx/5izTSj83PYtw4p5H8q27jKV7hgbZdQRob/lLRxuYdbft5GQrhWa4kgwLdlpz55Op2zp49JNRqKfv9Qz3l7hXDva1AGNgZTpVfZnrIGXu0YTTwWMphgVfKQb2bqnw/RkvhSlHqirRS6jLpnz9TX4l0WNJM63YeG3pKfD0sdjPRej+KTEUcrAG4sZjcU4A1NiyC68pTutmXdCT2LXD62fKt9ecr9K+kAoL7OmQXYWH7o+0Zzf9tfV3J95rWA5X75gV67O5dzdmNye8zo6HQPLLqnx/cy6rUrHHpjz/AGLHDwSWJuSSSSdydyTLFWryG4mdh67XyjQHnLug1vMmvxuGdqqXb2PR+FZ4z0ijF8c+4wMTqN4Cmx1Ee1YA6CNDMSbCYtjdtxd+wexA1vI8Uy5duUcKJINzaDUlt2yzHNwmpLsyrLDrxyjSpruZ/wBYJGkXOxsY5FIJW0kAsDc6ie0xvripJ7NHz3LF45OLVNDg55yQGVme9pIrSOVLkocR9oQvCUWiJdKXjjSVPeNz2A/Mx9Rwu2plGpUJ5zBg0aS6snPob8+rbfTj49SevibylXNwPGLeMZhNz4oxpb2PLZU8ZQqayw73kRWVTd7FsVRWZYIpvLK0gTa8u4HIpO1+2Z8sZQg8lbI3aPEtRmWK6vuR4fBkDMd+zs/rLnshobSW4GnIxdNuU4mTJKcrZ7bT6PFgj0x/xkTraxEY1Ug3tLAtsYC2xlZoeP8Ahdf+lHGWYe6f6zMIuLBfWb+hFuyZtdQr7AXnW8LyrqeKXDPOeOaZpLMt/Uq4WtVpnNTd0PajMvyM26fS/HZSprlgRbrIjH/UVvfvmZrfuhmAPbO5+VhtavtueaWaS4EdmbrMbntjHuQNh3mOzkbDSJlJ32l/Qkq+hC3dsRU6wJaagRbbzNNIjc6R9GytYsSJyPFNH1r4sXwt0dvwfXRwy+FJXb2foy/7Qchcxc7HYWjTWUWIET6wSdBPN0et64939iQUTvePGUHxlcBiJIKBuI0ST/hj9ytjK2ot3yuNSZaxdCxHjIsms9X4Zb0692eG8atayVrfYitoJIOcbbTzjhufKbMq+U5LYt4RLxZkET1ql5XZ5G7yB3kZZCcYExqSF6shZ5GXmeWUujAsh4olTPJKda2vZCE1KVMbiy61DUa+JiUqeV995H9aBGsX2ykTfljiyY3BOrWxLT5JYsinXDNRlNhqIrLsbyDDYpSNY/6wAbTyM4OMnF9j3uPNjlBST2aRKQL3vHZdbgSr9fUXEZ/aW4Av4CRob1OFcv7F8Id+XdIq+HUi95UWpVYGwsO+H1RyNW8hJ45OElKLpoqyZI5oOHw20132I2dQSCQbSI4tdt41uH9Y3JM6LobwKjWqOKgzZcmVSSFObNdnykMQMo0BF8289P8AmskcKySqq3Z4eeKKzOCvnj0OeoVHc5aaM7HZUUsfQazUHRvHMtzRKA//AKPTpH0dlM9XTh6UkyrYLe2RQKaC/aiAAjva++stcLRctsiK1z1VQLl26pI94jtnLl4pOSuK2+pfHTJcni2M6PYimmd1XICAWSpTqBSdg2RjbzlahhjnF57V0hwAdCze4UKVNrqhPvrp+ySH/wDWs8jxFFkZkcWdGZGHYykg/ETZpcq1eGalsyEn+XywlyrTLAogAGWaNIs+RELtYkhRcgDcnsEjw9WxVsqvlKtlb3WturdxndYzieDbA5KaZHcKwKoFF1b9q2gOjKQPEaETz7i06X9T289RKMoxxRtSqnzRyeG4bXqNlWk666s6Mqr2nUXY9wuTNSh0SrOwBqUwvJlzMSMuYWUgD3dd+3snTcP49UrolEUSSqi9YBj1kF1LECwuQL3POW1qAarsOsPuge1UD/K1VfKYdTmyY5dKrj0MeXU6lScZOn6KqPLMctgRvbn22O8z23E3+NYA0q1Sm3JmK96NqpHkfhMDkO4z13guVSxNez+5xPxBG5Y8y3uNX9URkaHxicz4RzDeMadbL5WeeQQkV4Tn2SoiqSJt4sJTIuiRNImhCZ5FqCA2iwjxeYY1I9doQmqP/AMsYbbzjqm8ITgZ/wBSR6DD+hEria3D/dMIStlmk85ep7GC7QhBnej2KlX3vIfjOn6Af4h/up/OIsJ6DJ/t/wDI8FqP30vdnoWK9xvuv/LJh76fw0/GEJ52HkZrfKHcV/uKv8N/5TPIuk/+LrffH8qwhOx4P55exi1vlRXw2wnRdF96X3q/zSEJz836v8z2Mf0MXt/1O3+jr/DVv4h/kEgXYfdX+TEQhOZ4h5l7GDL+4y+6OW6Y/wB5T/hj5mcXU5/eMSE9F+HfI/Y5/jH7TD7sa3OR1vxhCehy+RnnFyVoQhOWWn//2Q==",
    },
    {
      name: "Belly jude",
      role: "Developer",
      image:
        "https://i2-prod.football.london/incoming/article25857322.ece/ALTERNATES/s1200c/0_GettyImages-1449654188.jpg",
    },

    {
      name: "Marco rues",
      role: "Developer",
      image:
        "https://staticg.sportskeeda.com/wp-content/uploads/2016/08/988785017ccddfc308146a34ae1fccf7-1471971476-800.jpg",
    },
    // Add more team members as needed
  ];
  return (
    <div className="">
      <div className="head  rounded-lg flex items-center">
        <div className="container mx-auto p-8">
          <div className="Ourstory   text-center ">
            <h1 className="  text-[52px]  text-center font-bold text-blueColor ">
              Our Story
            </h1>
            <div className="img flex items-center p-[2rem] py-[2rem] rounded-[1rem] justify-between ">
              <div className="abt flex justify-between items-center mx-fullrounded-lg ">
                <p className="text-[20px] mb-4 text-justify">
                  At JobSeeker, our mission is to empower individuals on their
                  career journey by providing a seamless and efficient job
                  searching experience. We are dedicated to connecting talented
                  individuals with meaningful employment opportunities,
                  fostering professional growth, and supporting career
                  aspirations. Through our user-friendly platform, we strive to
                  simplify the job-seeking process, making it accessible to
                  everyone.
                </p>
                <img className=" w-[50%] rounded-lg" src={aboutus} alt="" />
              </div>
            </div>
          </div>

          <div
            className="team pt-8 
         rounded-md mt-10"
          >
            <h2 className="text-[52px] mt-8 text-center font-bold text-blueColor ">
              Meet Our Team
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              Discover the dedicated individuals powering JobFinder, committed
              to delivering an outstanding job search experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-md shadow-md p-6">
                  <img
                    className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-blue-600 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blueColor text-white mt-8 p-8 pb-4">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg mb-6">
              If you have any questions or suggestions, don't hesitate to reach
              out. We appreciate your feedback and are here to help you.
            </p>
            <div className="mb-6">
              <p className="text-lg mb-2">
                Email:{" "}
                <a href="mailto:info@jobfinder.com" className="underline">
                  info@jobfinder.com
                </a>
              </p>
              <p className="text-lg">Phone: (123) 456-7890</p>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-xl flex items-center text-blue-400 hover:text-blue-200 transition duration-300"
              >
                <FaFacebookF className=" text-[26px] text-white" />
              </a>
              <a
                href="#"
                className="text-xl flex items-center text-blue-400 hover:text-blue-200 transition duration-300"
              >
                <FaXTwitter className=" text-[26px] text-white" />
              </a>
              <a
                href="#"
                className="text-xl flex items-center text-blue-400 hover:text-blue-200 transition duration-300"
              >
                <FaLinkedinIn className=" text-[26px] text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
