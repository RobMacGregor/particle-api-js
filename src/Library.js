/* Library
 * Represents a version of a library published in the cloud.
 */

export default class Library {
	constructor(client, data) {
		this.client = client;
		this._assignAttributes(data);
		this.downloadUrl = data.links && data.links.download;
	}

	_assignAttributes(data) {
		Object.assign(this, data.attributes);
	}


	/**
	 * Download the compressed file containing the source code for this library version.
	 * @return {Promise} Resolves to the .tar.gz compressed source code
	 */
	download() {
		if (!this.downloadUrl) {
			return Promise.reject('No download URL for this library');
		}
		return this.client.downloadFile(this.downloadUrl);
	}

	/* TODO: add a versions() method to fetch an array of library objects */
}
