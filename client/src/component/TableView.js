import React from 'react'

const TableView = ({players}) => {
    console.log(players)
  return (
    <div>
		<section id="main-area" class="pt-5">
			<div class="col-md-12">
				<div class="card">
					<div class="card-header bg-secondary text-white font-weight-bold">
						Players
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-md-12 pt-3">
								<table class="table table-striped table-hover">
									<tr>
										<th>PlayerId</th>
										<th>Level</th>
										<th>Attempts</th>
									</tr>
									{
											players.map( (p,i) =>{
													return (
															<tr key={i}>
																	<td>{p.id}</td>
																	<td>{p.level}</td>
																	<td>{p.attempts}</td>
															</tr>
													)
											})
									}
									</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}

export default TableView
