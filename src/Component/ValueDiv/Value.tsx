const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem] m-10 p-20">
      <h1 className="text-[25px] py-[2rem] pb-[3rem] font-poppins font-bold w-[400px]">
        The value that hlds us true and to accoount
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="SingleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center  justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhERvmcsIdcAsWq_y7mTNpwln2oixquAoi0Q&usqp=CAU"
                alt=""
                className="w-[70%]"
              />
            </div>
            <span className="font-semibold text-textColor text-[18px] ">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ea
            assumenda eum laudantium corporis nobis nostrum obcaecati amet
            aspernatur ex maxime.
          </p>
        </div>
        <div className="SingleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center  justify-center">
              <img
                src="https://d9fb8z61l19d7.cloudfront.net/wp-content/uploads/2021/10/logo-unciorn-color.png"
                alt=""
                className="w-[70%]"
              />
            </div>
            <span className="font-semibold text-textColor text-[18px] ">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ea
            assumenda eum laudantium corporis nobis nostrum obcaecati amet
            aspernatur ex maxime.
          </p>
        </div>
        <div className="SingleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center  justify-center">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAggMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EADkQAAEDAwEGAwUGBQUAAAAAAAEAAgMEBREhBhIxQVFhEyJxMoGRscEUIzNCofAHFVLR4TRigpKy/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAMEBQYCAQf/xAAzEQACAgEBBgMGBQUBAAAAAAAAAQIDBBEFEiExQVETImEUMnGhsfBCkcHR8QYjUoHhM//aAAwDAQACEQMRAD8A7igCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgMNVUx0sJlmdhg/VeoQc3uohvvrordlj0SNe1VT62A1Dm7rXPO43oBp/de7q1XLdIMHIlk1eK1om3p8DeURdCAIAgCAIAgCAIAgCAIDzI4MYXuOGtGSU58EfJSUVq+RHWSuNcyeQ8pThvRuBhWMirwml6GdszMeVCc33+XQkiQBqq5pFMvlxNXMSw/cs0YOvdbGNR4cePNnEbSzXl3aRfkXL19Sw7NuDrNTkdHf+is/LX96R0+yuGJD76sk1XNAIAgCAIAgCAIAgCAIAgIvaOfwra5oOsjgz6n5KziQ3rV6cTJ21d4WI1/k0v1+iK/s5cBS3QwyOxHOA3J5O5fUK/mU79e8uhkbFv8ACs3Xyl9ehP7QVXgUDgw+aU7gPz/RUMWG/Z8DY2xkeDitLnLh+5SayTdbjutuC4nIUx1ZadiaoTW2SEnzQyEe46j9crK2hDdt17o7DZM9aN3s/qWJUDUCAIAgCAIAgCAIAgCAICB2r/01P08X6FXcH338Dn/6h/8AGHx/RlLr9PMPQrar7GDj8eBvfzx1whp4Kp33sIID8/iZxr66KusVVSco8n8i3tG22+ENfw6/7104/Ijq9/tDoVZrRWx48mZ9k7u23XholduwVA8N5PAH8p+OnvUWfjuynWPNcTdwZ+FZx5M6aDoucN88yyMiYXPcGtHMleZzUFrJ6I+xTk9EaD7swuxEzeHUnCyrdqxT0rjqWViy08xkiuG97bPgVHXtfjpOP5HmVDXJm3HI2QZaQQtaq6Fsd6D1IGmuDPalPgQBAEAQBAEBFbSQeLbS4DJicH/T6qziT3bfiZG26fExG1+Fp/f5lGrW41Iy1wwtys5THZB1LXR6j2evRW4tM2Kmpc+ZhNdIPK47ze/Fe/DRL7NF8Uaz52u54XtQ0LEami9bH7YtNMaK5FzpYWZikAzvt6Hv3/Z5vbGPDFi71wXb19PvgbOFGd7VSXEzVl2kq5DJM4NYD5WZ0b/lcNk5E7pay5djpqcSNa0XM1f5o/OImgDqeKoyk+hP7KvxGWK41WdJCe2AoXOR4ljV9iVpK+sbr4Q9TovdOXbTLehzKNuPU+GpK01bVy8Kdrh1DtPitfF2jmXe7XvevL5lKymqP4iRjc9w87A09jlblUrGvOtH8df0RVenQ9qU+BAEBGXW+UNqqKWCrl3ZKqQMY0csnGT0HdT041t0ZSguEVqelFvkSQOVAeTzKxskbmPGWuGCOy+ptPVHmcVOLjLkygXSmNPNLTS/lOh6jkVvUWKcVJHBW48sW5wfT5orVUTG4tcP8rQhx4mlTpJaoi6kNOS04ViOpo1N9TTcTzUqRehFMzUlbNRvLoiNeIIyCqO0Nl0Z8FG3pya6GliX2Y71h1JinujKtwB8jwPYJ+S/Pdq7DyMDzPzQ7/v2+h1OHl1XrRcJdiWo4XS4LvKzr19Fz8uBNbNR4LmTVKxjMCNuvDPEqu03yM+1t8WWShtmGh9TqeTOQ9Vv4WyIxSnfxfb9zHuyNeECUaABgDC3EtFoiofV9AQBAQ20+0FNs/b3VE/nmdlsMIOsjvoOpVrDxJ5Vm5Hl1fY9wg5M4vcbhU3WskrK2QyTSHXkGjkB0C7OmiFFarguBchBLgjrWwd/F5tIjqHj7bTAMlGfaHJ3vHHvlcntLD9mt1Xuvl+xWur3JejLOs4hIPaa1urafxoG5qIhwH529FcxMjwpaS5Mytp4PtEd+HvL5nO61rZWkE4I4Hougg9GYNDcGV6q343lrxg/NXYaNcDdp3ZLVGo5ymSLcYnnxOq9aFyv1PQcQQ5pwRqCF4nCM4uElqmXq4tcUXG03H7TRskeQHjyvHcc1+S7b2b7BmSrj7r4r4P9jdpbshq+ZedmLefCbW1DdXaxNPIdVJs3CUV4s1x6GNtDITl4UOnMsS2DMCAIAgI++3WGy2qe4VDJHxwtzuxtySeQ7ep0Cmx6JX2xqjzZ6jFyeiOEXm+Vl7uUlbXuyXaMY32Ym8mj96ru8bDrxqlCv+S9GCitEa7TzBUrR9T0JGy3Wos9xirqNwD2aOaeD2ni0qrlY0Mip1z/AIJ9yNsdGdssN5pb5QMq6N3lOj2H2o3c2lcVk41mNY65/wAmXbXKuW6ySOoUBGUzbOwxiKW5Urmxlo3pmOOA7uO/bn68dTBzdx+HZy6ehm5GznbPepXmfTuc7qt2RuHDPzXQw7op1KVcuzIqZhYeo6q3B6mtTNSNZzlKkXIxPsUmHBp58F9cS7Rz0Zdf4e2t10qniRp+yxO3pT16N9/yBXDf1JSr82tdFHj+fBGhZkezY70958v1Z15oAAxoOipI54+oAgCAIDy9ge0tcAQRggjOUBz7aj+GlPVF9TYXx0sp1NM/8Jx/2kez6aj0W/hbcnX5b/Mu/X/v1LEMhrhI51c7Rc7NIWXGjmgGcB7hlh9HDRdFTl0ZC1rlr9fy5lqMoz5M1o5GuAI581K0ySKaZKWW81dkrW1VDMGng9jjlsg6EfXkqmTi15MNya/4TShG2O7NHVGbZ0zbCy51dBWw7x3BGYjhzuzuG6epwuQuw3Xd4akn66/fEo1YE7bvChJff30KBftoqu+TB1Q4Mgb+HA0+Vvc9T3UqrrrjojqMPCrxI+Ravv8AfQiid4cVJTnyx3o3quxU2jsWnN1n7s+66/E13scDqMhbmNnUZC8kuPbkzlMnZmTiP+5Hh3XI15IGv1b5T2WhGbXM+VWyXqLfZ66418VLQw+LK92mDoBzJ6AL7dlVU1udj0NCq6HvM7xs1ZobFaYaKHDnNGZZMfiPPE/vlhcJlXvIula+v0K19ztnvMlVAQhAEAQBAEAQHxzWuaWuaC08QRxTkCLqNnLHUPL5rPQPeeLjTsyffhWY5mTBaRsa/wBs9q2a5My0dktVE7epLZRwO/qjga0/HC8WZN9nvzb+LYdk5c2bk8Mc8T4po2SRvGHNcMgjuFCuep5i3F6x4Mol9/h417nTWWRrM6mnlccf8XcvQqzG9PhM38Tbcl5b1r6r9Sm1tluVvcRV0U8YH5tzLf8AsNF6cYS5M26s2i33JJmnFiR+5H53/wBLdT8FDKgnctFq+CJ61bI3O5vafsn2eI8ZZ27vwHEr2snIgtI2NL4mNlX7NhxcVKXol9TpGz+z9HYqbw6Zm9K4feTOHmf/AGHZQynOb1m236nPZGQ7nySXRLkS68lcIAgCAIAgCAIAgCAIAgCA+YQDCAYQH1AEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAf/2Q=="
                alt=""
                className="w-[70%]"
              />
            </div>
            <span className="font-semibold text-textColor text-[18px] ">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ea
            assumenda eum laudantium corporis nobis nostrum obcaecati amet
            aspernatur ex maxime.
          </p>
        </div>
      </div>
      <div className="card mt-[2rem]  flex justify-between bg-greyIsh p-[5rem]  rounded-[10px] ">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">
            Ready to switch a career
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Let's get started
          </h2>
        </div>
        <button className="border-[4px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-blueColor hover:text-white    ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
