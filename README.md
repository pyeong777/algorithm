# algorithm
코어자바스크립트 & 알고리즘 공부를 위한 저장소입니다(●'◡'●) <br>
<br>
사용언어는 **JavaScript** 입니다 

# 목차
<h2>1. 데이터타입</h2>
<details>
  <summary style="font-Weight : bold; font-size : 15px;" >접기 / 펼치기</summary>
  <div>  
    JS의 데이터타입에는 기본형과 참조형이 있다. <br>
    변수에 기본형 데이터를 할당할시 별도의 공간에 데이터를 우선 저장한뒤 그 공간의 주솟값을 변수의 값에 할당하게된다.<br>
    그에 반해 <span style="font-weight: bold;">참조형 데이터는 여러개의 props들을 모은 그룹</span>이기때문에 props들을 위한 변수 영역을 별도로 확보하고 그 주솟값을 변수에 연결, 그 props들의 식별자를 저장, 각 데이터를 별도의 공간에 저장해 그 주솟값을 식별자들과 매칭시킨다. <br><br>
    참조형 데이터를 불변값으로 사용하기위해선, 내부 props들을 일일이 복사해야된다. 이때 필요한게 깊은복사이다.    
  </div>
</details><br>

<h2>2. 실행컨텍스트</h2>
<details>
  <summary style="font-Weight : bold; font-size : 15px;">접기 / 펼치기</summary>
  <div>  
    실행 컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 객체이다.
    <p>실행 컨텍스트에는 3가지 환경정보들이 담긴다.</p>
    <p>1. VariableEnvironment</p>
    <p>2. LexicalEnvironment</p>
    <p>3. ThisBinding</p>

<p>VariableEnvironment에는 식별자 정보를 수집하는 용도로 쓰인다.
    LexicalEnvironment에는 각 식별자에 담긴 데이터를 추적하는 용도로 쓰인다. 변수의 값들이 실시간으로 반영된다는 뜻이다.</p>    

   <p>LexicalEnvironment에는 매개변수명, 변수의 식별자, 선언한 함수의 함수명등을 수집하는 environmentRecord와 바로 직전 컨텍스트의 LexicalEnvironment 정보를 참조하는 outerEnvironmentReference로 구성되어있다.</p>

   <p>이 environmentRecord가 하는일을 우리는 바로 호이스팅이라고 말한다.</p>
   <p>호이스팅은 변수 선언부분과 함수 선언부분을 끌어올리는데, 이때 함수 선언문과 함수 표현식의 차이가 있다. 함수 선언문은 전체를 호이스팅하지만, 함수 표현식은 변수 선언부분만 호이스팅을 하게된다. 이때 함수 선언문은 전역 컨텍스트에서 문제를 일으킬 확률이 높기때문에 되도록 함수 표현식을 사용하는게 좋다.</p>

   <p>outerEnvironmentReference는 현재 컨텍스트와 관련있는 외부 식별자 정보(LexicalEnvironment)를 참조한다. 쉽게말해 점점 멀리있는 스코프를 타고 변수를 찾아나가는 것이다.</p>
   <p>이 과정을 스코프체인이라고 부른다.</p>
  </div>
</details><br>

<h2>3. this</h2>
<details>
  <summary style="font-Weight : bold; font-size : 15px;">접기 / 펼치기</summary>
  <div>  
    <p>this는 실행 컨텍스트가 생성될 때 결정된다. 실행 컨텍스트는 함수를 '호출'할 때 생성되므로, 다시말하면 this는 함수를 호출할 때 결정된다.</p><br>
    <p>1. 전역공간에서의 this는 전역객체를 가리킨다.</p>
    <p>2. 함수를 호출할 때의 this또한 무조건 전역객체를 가리킨다.</p>
    <p>3. 메서드 호출시에는 호출 주체가 this가 된다. 보통 .앞이나 대괄호 앞이다.</p>
    <p>4. Callback 호출시에는 기본적으로 this가 함수내부에서와 동일하게 전역객체를 가르키지만, 함수가 정의한 바에 따라 달라진다.
    </p>
    <p>5. 생성자함수 호출시에는 인스턴스가 곧 this다.</p>
  </div>
</details><br>

<h2>4. 콜백함수</h2>
<details>
  <summary style="font-Weight : bold; font-size : 15px;">접기 / 펼치기</summary>
  <div>  
    <p>1. 다른 함수 A의 인자로 콜백함수B를 전달하면 A가 B의 제어권을 갖게된다.</p>
    <p>2. 특별한 요청(bind)이 없는 한 A에 미리 정해놓은 방식에 따라 B를 호출하게 된다.</p>
    <p>3. 여기서 미리 정해놓은 방식이란 어떤 시점에서 콜백을 호출할지, 인자에는 어떤 값들을 지정할지, this에 무엇을 바인딩할지 등이다.</p>
    <p>**이런것들이 forEach나 addEventListener 등에 대해 mdn 문서에 나와있듯이 콜백을 어떤식으로 호출하고, 어떤값을 매개변수로 넘기고 그때 this는 무엇으로 할거다 등등이 정의가 되어있다.</p>
    
    arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
  
  
  </div>
</details><br>

<h2>5. 클로저</h2>
<details>
  <summary style="font-Weight : bold; font-size : 15px;">접기 / 펼치기</summary>
  <div>  
  
  <p>클로저는 내부함수와 LexicalEnvironment의 조합에서 나타나는 특별한 현상이다.</p><br>

<p>여기서 특별한 현상은 컨텍스트 A에서 선언한 변수a를 참조하는 내부함수 B를 A의 외부로 전달할 경우, A가 종료된 이후에도 변수a가 사라지지 않는 현상을 말한다.</p><br>
<p>클로저를 통해 함수 종료 후에도 사라지지 않는 지역변수를 만들 수 있다.</p>
  </div>
</details><br>




