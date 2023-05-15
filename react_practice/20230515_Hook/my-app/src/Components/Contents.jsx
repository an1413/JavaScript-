import React from 'react'
import './Contents.css'

export default function Section() {
  return (
    <section>
        <article>
            <h3 className='article-title'>선언형</h3>
            <div className='content-box'>
                <p className='title-content'>
                    React는 상호작용이 많은 UI를 만들 때 생기는 어려움을 줄여줍니다. 애플리케이션의 각 상태에 대한 간단한 뷰만 설계하세요. 그럼 React는 데이터가 변경됨에 따라 적절한 컴포넌트만 효율적으로 갱신하고 렌더링합니다.
                </p>
                <p className='sub-content'>
                    선언형 뷰는 코드를 예측 가능하고 디버그하기 쉽게 만들어 줍니다.
                </p>
            </div>
        </article>
        <article>
            <h3 className='article-title'>컴포넌트 기반</h3>
            <div className='content-box'>
                <p className='title-content'>
                    스스로 상태를 관리하는 캡슐화된 컴포넌트를 만드세요. 그리고 이를 조합해 복잡한 UI를 만들어보세요.
                </p>
                <p className='sub-content'>
                    컴포넌트 로직은 템플릿이 아닌 JavaScript로 작성됩니다. 따라서 다양한 형식의 데이터를 앱 안에서 손쉽게 전달할 수 있고, DOM과는 별개로 상태를 관리할 수 있습니다.
                </p>
            </div>
        </article>
        <article>
            <h3 className='article-title'>한번 배워서 어디서나 사용하기</h3>
            <div className='content-box'>
                <p className='title-content'>
                    기술 스택의 나머지 부분에는 관여하지 않기 때문에, 기존 코드를 다시 작성하지 않고도 React의 새로운 기능을 이용해 개발할 수 있습니다.
                </p>
                <p className='sub-content'>
                    React는 Node 서버에서 렌더링을 할 수도 있고, <a href="https://reactnative.dev/" target="_blank" rel="nofollow noopener noreferrer">React Native</a>를 이용하면 모바일 앱도 만들 수 있습니다.
                </p>
            </div>
        </article>
    </section>
  )
}
