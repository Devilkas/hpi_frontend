import styles from "./Form.module.sass"
import {MessagesService} from "@/services/message.service";
import {useState} from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Form = ({inputs, butName}) => {
	const [formData, setFormData] = useState({
		data: {},
	});
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await MessagesService.sendMessage(formData);
			MySwal.fire({
				title: <strong>Повідомлення успішно надіслано</strong>,
				// html: <i>You clicked the button!</i>,
				icon: 'success',
				backdrop: false
			})
			return false;
		} catch (error) {
			MySwal.fire({
				title: <strong>Виникла помилка, спробуйте пізніше!</strong>,
				// html: <i>You clicked the button!</i>,
				icon: 'error',
				backdrop: false
			})
		}
	};
	const handleInputChange = (e) => {
		const {name, value} = e.target;
		const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
		setFormData({
			data: {
				...formData.data,
				[formattedName]: value,
			},
		});
	};
	
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			{inputs && Object.entries(inputs).map(([inputName, label]) => (
				<div key={inputName} className={styles.form__groupe}>
					{inputName === "question" ? (
						<>
							<label htmlFor={inputName} className={styles.form__label}>{label}</label>
							<textarea id={inputName} name={inputName} className={styles.form__control} required
							          placeholder="Пишіть тут" rows="10" onChange={handleInputChange}></textarea>
						</>
					) : (
						<>
							<label htmlFor={inputName} className={styles.form__label}>{label}</label>
							<input type={inputName === "email" ? "email" : "text"} id={inputName} name={inputName}
							       className={styles.form__control} required placeholder="Пишіть тут" onChange={handleInputChange}/>
						</>
					)}
				</div>
			))}
			<button type="submit" className={styles.form__button}>{butName}</button>
		</form>
	)
}

export default Form