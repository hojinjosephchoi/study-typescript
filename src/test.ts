type PersonAlias = {
  name: string;
  age: number;
};

interface IPerson extends PersonAlias {

}

let ip: IPerson = {
  name: 'Mark',
  age: 35,
};

class PersonImpl implements PersonAlias {
  public name: string = '이름';
  public age: number = 20;

  public hello() {
    console.log('안녕하세요');
  }
}

let pi: PersonImpl = new PersonImpl();
pi.hello();
