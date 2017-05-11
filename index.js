// vers 1.0.0

module.exports = function NoGvgLoginNotify(dispatch) {
	dispatch.hook('S_NOTIFY_GUILD_WAR_INFO', 1, (event) => {
		return false;
	})
}