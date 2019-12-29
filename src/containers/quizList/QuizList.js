import React, {Component} from "react"
import classes from "./QuizList.module.css"
import {NavLink} from "react-router-dom"
import Loader from "../../components/ui/loader/Loader"
import {connect} from "react-redux"
import {deliteQuiez, fetchQuizes} from "../../store/actions/Quiz"

class QuizList extends Component{

    renderQuizes(){
        return this.props.quizes.map((quiz)=>{
            return(
                <li
                    key={quiz.id}
                >

<NavLink to={"/quiz/"+quiz.id}>
    {quiz.name}

</NavLink>

                </li>

            )

        })
    }

 componentDidMount() {
        this.props.fetchQuizes()
     console.log(this)
    }

    render() {
        return(
            <div className={classes.OuizList}>
<div>
<h1>Список тестов</h1>
    {this.props.loading&&this.props.quizes.length!==0
    ?<Loader/>
    :
        <ul>
            {this.renderQuizes()}

        </ul>
    }


</div>
            </div>
        )
    }
}
function mapStateToProps(state) {
return{
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
}
}
function mapDispatchToProps(dispatch) {
return{
    fetchQuizes:()=>dispatch(fetchQuizes()),
    deliteQuiez:()=>dispatch(deliteQuiez())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(QuizList)