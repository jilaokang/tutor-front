export default function (event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
        [name]: value
    });
}