export class AsyncFileReader {

	private reader = new FileReader();

	readAsText(file: File, encoding: string = 'windows-1251'): Promise<string> {

		this.reader.readAsText(file, encoding);

		return new Promise<string>((resolve, reject) => {

			this.reader.onload = () => {
				resolve(this.reader.result as string);
			};

			this.reader.onerror = () => {
				reject(this.reader.error);
			};
		});
	}
}
