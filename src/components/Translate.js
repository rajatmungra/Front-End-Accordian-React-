// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import { useEffect, useState } from "react";
import axios from 'axios';
import Dropdown from "./Dropdown";

const Translate = () => {



    const options = [
        {
            lable: 'Afrikaans',
            value: 'af'
        },
        {
            lable: 'Arabic',
            value: 'ar'
        },
        {
            lable: 'Hindi',
            value: 'hi'
        }
    ];

    const [language, setLanguage] = useState(options[0])
    const [data, setData] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        if (data) {
            const helper = async () => {
                const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                    params: {
                        q: data,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                });
                setResult(res.data.data.translations[0].translatedText);

            }
            helper();
        }
        setResult('');
    }, [data, language.value]);

    console.log(result);
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input onChange={(e) => { setData(e.target.value) }} />
                </div>
            </div>
            <Dropdown temp={'language'} selected={language} onSelectedChange={setLanguage} color={options} />
            <br></br>
            <h3>Output</h3>
            <div className="ui form">
                <div className="field">
                    <input disabled={true} value={result} type='text' />
                </div>
            </div>
        </div>
    )
}

export default Translate;